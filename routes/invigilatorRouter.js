const express = require("express");
const router = express.Router();

const { handleGetHome } = require("../contollers/invigilatorControllerr");

router.get("/", handleGetHome);

module.exports = router;