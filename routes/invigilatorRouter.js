const express = require("express");
const router = express.Router();

const { handleGetHome } = require("../contollers/invigilatorControllerr");
const {restrictForInvigilator} = require("../middleware/roleMiddleware");
router.use(restrictForInvigilator);

router.get("/", handleGetHome);

module.exports = router;