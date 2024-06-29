const express = require("express");
const router = express.Router();
const multer = require('multer');

const { handleGetHome, handlePostPdf } = require("../contollers/examinerController");

router.get("/", handleGetHome);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userFolder = `/pdfs`;
    fs.mkdirSync(userFolder, { recursive: true });
    cb(null, userFolder);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });


router.post("/upload-pdf",upload.single("pdf"),handlePostPdf);

module.exports = router;
