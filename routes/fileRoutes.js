const fileController = require("../controllers/file_controller");
const fileRoutes = {
  routes: (app, upload) => {
    app.post("/api/v1/postImage", upload, fileController.uploadImage);
  },
};

module.exports = fileRoutes;
