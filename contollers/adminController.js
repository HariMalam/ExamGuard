const xlsx = require("xlsx");
const User = require("../models/User");
const Examiner = require("../models/Examiner");
const Invigilator = require("../models/Inviligilator");
const fs = require("fs");
const moment = require('moment');

const handleGetHome = async (req, res) => {
  const users = await User.find({ role: { $ne: "Administrator" } });
  const examiners = await Examiner.find({});
  const invigilators = await Invigilator.find({});

  const alert = req.session.adminAlert || false;
  delete req.session.adminAlert;
  res.render("administrator/index", { users, examiners, invigilators, alert, user:req.user});
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

      if (role !== "Examiner" && role !== "Invigilator") {
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
    req.session.adminAlert = "user exel file uploaded"
    res.redirect("/administrator");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
};

const handlePostExaminersExcel = async (req, res) => {
  try {
    const file = req.file;
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (const row of data) {
      const { name, email, subCode, subName } = row;
      console.log(row);
      
      if (!name || !email || !subName || !subCode) {
        continue;
      }

      if (!existingUser) {
        const user = new Examiner({ name, email, subName, subCode });
        const response = await user.save();
      }

    }

    fs.unlink(file.path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    req.session.adminAlert = "examiners exel file uploaded"

    res.redirect("/administrator");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
};

const handlePostInvigilatorExcel = async (req, res) => {
  try {
    const file = req.file;
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (const row of data) {
      const { name, email, subCode, subName } = row;

      if (!name || !email || !subName || !subCode) {
        continue;
      }
      const existingUser = await Invigilator.findOne({ email });

      if (!existingUser) {
        const user = new Invigilator({ name, email, subName, subCode });
        const response = await user.save();
      }
    }

    fs.unlink(file.path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });
    req.session.adminAlert = "invigilators exel file uploaded"
    res.redirect("/administrator");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
};

module.exports = {
  handleGetHome,
  handlePostUsersExcel,
  handlePostExaminersExcel,
  handlePostInvigilatorExcel
};
