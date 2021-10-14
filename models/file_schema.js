const mongoose = require("mongoose");
const fileRoutes = require("../routes/fileRoutes");
const schema = mongoose.Schema;

const fileSchema = new schema(
  {
    image_title: { type: string, required: true },
    image_url: { type: String, required: true },
    tags: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const File = mongoose.model("File", fileSchema);
module.exports = File;
