const User = require("../models/User");

const restrictToLoggedinUserOnly = async (req, res, next) => {
  const userUid = req.session.uid;

  if (!userUid) {
    return res.redirect("/auth/login");
  }

  const user = await User.findOne({ _id: userUid });

  req.user = user;

  next();
};

module.exports = { restrictToLoggedinUserOnly };
