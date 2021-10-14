const fileController = require("../controllers/file_controller");
const fileRoutes = {
  routes: (app, upload) => {
    app.post("/api/v1/postImage", upload, fileController.uploadImage);
    app.get("/api/v1/fetchImages", fileController.getImages);
  },
};

module.exports = fileRoutes;
