const User = require("../models/User");

const restrictForExaminer = async (req, res, next) => {
  const user = req.user

  if (user.role !== "Examiner") {
    return res.redirect("/auth/login");
  }

  next();
};
const restrictForAdmin = async (req, res, next) => {
  const user = req.user

  if (user.role !== "Administrator") {
    return res.redirect("/auth/login");
  }

  next();
};
const restrictForInvigilator = async (req, res, next) => {
  const user = req.user

  if (user.role !== "Invigilator") {
    return res.redirect("/auth/login");
  }

  next();
};

module.exports = { restrictForAdmin, restrictForExaminer, restrictForInvigilator };
