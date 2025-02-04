const multer = require("multer");
const path = require("path");

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/books");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.split(".")[0] + "-" + Date.now() + ".pdf");
  },
});

const fileFilter = (req, file, cb) => {
  var extention = path.extname(file.originalname);
  if (extention !== ".pdf") {
    return cb(new Error("Only pdf are allowed"));
  }
  cb(null, true);
};

module.exports = multer({ storage: storageConfig, fileFilter: fileFilter });
