const express = require("express");
const router = express.Router();
const multer = require('multer');

const { handleGetHome, handlePostUsersExcel, handlePostExaminersExcel, handlePostInvigilatorExcel} = require("../contollers/adminController");

const {restrictForAdmin} = require("../middleware/roleMiddleware");
router.use(restrictForAdmin);

router.get("/", handleGetHome);

const upload = multer({ dest: 'uploads/' });

router.post('/upload-users-excel', upload.single('file'), handlePostUsersExcel);
router.post('/upload-examiners-excel', upload.single('file'), handlePostExaminersExcel);
router.post('/upload-invigilators-excel', upload.single('file'), handlePostInvigilatorExcel);
module.exports = router;
