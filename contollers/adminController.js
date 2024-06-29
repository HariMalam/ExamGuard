const xlsx = require('xlsx');
const User = require("../models/User");
const fs = require("fs");

const handleGetHome = (req, res) => {
  res.render("administrator/index");
};

const handlePostUsersExcel = async (req, res) => {
  try {
    const file = req.file;
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (const row of data) {
      const { name, email, phone, role } = row;

      if (!name || !email || !phone || !role) {
        continue;
      }

      if(role !== "Examiner" && role !== "Invigilator"){
        continue;
      }

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        const user = new User({ name, email, phone, role });
        await user.save();
      }
    }

    fs.unlink(file.path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    res.status(200).send("File uploaded and data saved to MongoDB!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
};

module.exports = { handleGetHome, handlePostUsersExcel };
