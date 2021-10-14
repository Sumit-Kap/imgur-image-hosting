const { cloudinary } = require("../utils/cloudinary");
const File = require("../models/file_schema");
const { response } = require("express");

const fileService = {
  uploadService: async (reqBody, cb) => {
    const { title, desc, data, tags } = reqBody;
    const uploadedResponse = await cloudinary.uploader.upload(data, {
      upload_preset: "ml_default",
    });
    const file = new File({
      image_title: title,
      image_url: uploadedResponse.url,
      tags: tags,
      description: desc,
    });
    file
      .save()
      .then((res) => {
        cb(null, res);
      })
      .catch((err) => {
        cb(err, null);
      });
  },
  fetchFiles: (cb) => {
    File.find({}, (err, response) => {
      if (err) {
        cb(err, null);
        return;
      } else {
        cb(null, response);
      }
    });
  },
};

module.exports = fileService;
