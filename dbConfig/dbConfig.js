const mongoose = require("mongoose");
const dbConfig = {
  connect: () => {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then((r) => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log("database failed to get connected", err);
      });
  },
};

module.exports = dbConfig;
