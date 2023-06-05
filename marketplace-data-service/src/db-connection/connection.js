const mongoose = require("mongoose");
const config = require("../../src/config");
const url = config.dbUrl;
function getConnection() {
  mongoose.connect(url, { useNewUrlParser: true });

  const con = mongoose.connection;
  con.on("open", function () {
    console.log("successfully database connected...");
  });
}

module.exports = getConnection;
