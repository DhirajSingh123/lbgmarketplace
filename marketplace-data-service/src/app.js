const express = require("express");
const config = require("./config");
const app = express();
const router = express.Router();
const port = config.port;
const resources = require("./resources");
const getConnection = require("./db-connection/connection");
const errorResponse = require("./utility/errorresponse.json");
const constant = require("./utility/constant");
const { errorResponseHandler } = require("./utility/errorResponseHandler");

router.use(resources);
app.use(config.restApiRoot, router);
app.use((req, res, next) => {
  res
    .status(constant.STATUS404)
    .json(errorResponseHandler(errorResponse[constant.ERRORMSG404]));
});
getConnection();
app.listen(port, () => {
  console.log("App listening on port : " + port);
});
