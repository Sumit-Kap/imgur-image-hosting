const bcrypt = require("bcrypt");
const User = require("../models/user_schema");
const jwt = require("jsonwebtoken");
const userService = {
  registerService: async (requestBody, cb) => {
    const { name, email, password } = requestBody;
    try {
      const response = await User.findOne({ email_id: email });
      if (response) {
        cb("user already exist", null);
      } else {
        const saltRounds = 10;

        const salt = bcrypt.genSaltSync(saltRounds);
        const encryptedPwd = bcrypt.hashSync(password, salt);

        const user = new User({
          name,
          email_id: email,
          password: encryptedPwd,
        });
        user
          .save()
          .then((res) => {
            cb(null, res);
          })
          .catch((err) => {
            console.log("err is", err);
            cb(err, null);
          });
      }
    } catch (err) {
      console.log("error in finding user", err);
    }
  },
  loginService: async (requestBody, cb) => {
    const { email, password } = requestBody;
    console.log("email-->", email, password);
    try {
      const response = await User.findOne({ email_id: email });
      if (!response) {
        cb("user not exist", null);
        return;
      } else {
        const result = await bcrypt.compare(password, response.password);
        console.log(result);
        if (result) {
          const authToken = await jwt.sign(
            { id: response._id },
            process.env.secret,
            {
              expiresIn: "20 days",
            }
          );
          cb(null, {
            token: `Bearer ${authToken}`,
            user: response,
            status: 200,
          });
        } else {
          cb("incorrect password", null);
        }
      }
    } catch (err) {
      console.log(err);
      cb(err, null);
    }
  },
};

module.exports = userService;
