const UserController = require("../controllers/user_controller");
const userRoutes = {
  routes: (app) => {
    app.post("/api/v1/registerUser", UserController.register);
    app.post("/api/v1/loginUser", UserController.login);
  },
};

module.exports = userRoutes;
