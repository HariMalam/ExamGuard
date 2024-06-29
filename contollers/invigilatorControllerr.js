const Inviligilator = require("../models/Inviligilator");

const handleGetHome = async(req, res) => {
  const email = req.user.email;
  const data = await Inviligilator.find({email});
  console.log(data);
  res.render("invigilator/index", {data});
};


module.exports = { handleGetHome };
