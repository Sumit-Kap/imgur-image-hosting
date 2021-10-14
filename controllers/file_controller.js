const { uploadService } = require("../services/file_service");

const fileService = require("../services/file_service");
const fileController = {
  uploadImage: async (req, res) => {
    const { data, title, tags, desc } = req.body;

    fileService.uploadService({ data, title, tags, desc }, (err, response) => {
      if (err) {
        res.status(500).json({
          message: "something went wrong",
        });
      } else {
        res.status(200).json({
          data: response,
        });
      }
    });
  },
  getImages: (req, res) => {
    fileService.fetchFiles((err, response) => {
      if (err) {
        res.status(500).json({
          message: "something went wrong",
        });
      } else {
        res.status(200).json({
          data: response,
        });
      }
    });
  },
};

module.exports = fileController;
