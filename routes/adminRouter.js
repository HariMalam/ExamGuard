const express = require("express");
const router = express.Router();
const multer = require('multer');

const { handleGetHome, handlePostUsersExcel } = require("../contollers/adminController");

router.get("/", handleGetHome);

const upload = multer({ dest: 'uploads/' });

router.post('/upload-users-excel', upload.single('file'), handlePostUsersExcel);

module.exports = router;
