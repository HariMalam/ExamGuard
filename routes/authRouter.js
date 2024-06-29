const express = require("express");
const router = express.Router();

const { handleGetLogin, handleGetSignup, handlePostLogin, verifyOtp, checkEmail, submitSignupForm, handleLogout } = require("../contollers/authController");

router.get("/login", handleGetLogin);
router.get("/signup", handleGetSignup);

router.post("/login", handlePostLogin);

router.get('/check-email', checkEmail);
router.post('/submit-form', submitSignupForm);
router.post('/verify-otp', verifyOtp);

router.get("/logout", handleLogout);

module.exports = router;
