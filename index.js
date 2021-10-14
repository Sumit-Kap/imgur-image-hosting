require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("./dbConfig/dbConfig").connect();
const multer = require("multer");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(__dirname + "./public/"));

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single("file");

require("./routes/fileRoutes").routes(app, upload);
require("./routes/userRoutes").routes(app);
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`app listening at PORT:${PORT}`);
});
