const userService = require("../services/user_service");
const userController = {
  register: (req, res) => {
    const { name, email, password } = req.body;

    if (!(name && email && password)) {
      res.status(400).json({
        message: "Missing required fields",
      });
      return;
    } else {
      userService.registerService(
        { name, email, password },
        (err, response) => {
          if (err) {
            res.status(500).json({
              message: "Something went wrong",
            });
          } else {
            res.status(200).json({
              status: 200,
              data: "user registered",
            });
          }
        }
      );
    }
  },
  login: (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).json({
        message: "Missing required fields",
      });
      return;
    } else {
      userService.loginService({ email, password }, (err, resp) => {
        if (err) {
          res.status(500).json({
            message: err,
          });
        } else {
          res.status(200).send(resp);
        }
      });
    }
  },
};

module.exports = userController;
