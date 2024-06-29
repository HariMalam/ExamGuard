const Examiner = require("../models/Examiner");
const moment = require("moment");
const Invigilator = require("../models/Inviligilator");

const handleGetHome = async(req, res) => {

  const data = await Examiner.find({email: req.user.email,});
  res.render("examiner/index", {data, user: req.user});
};

const handlePostPdf = async(req,res) => {
  const pdf = `/pdfs/${req.file.filename}`;
  const subCode = req.body.subCode;
  const update = await Examiner.updateOne({subCode},{action: "done"});
  const upload = await Invigilator.updateOne({subCode},{pdf});
  res.redirect("/examiner");
}
module.exports = { handleGetHome, handlePostPdf };
