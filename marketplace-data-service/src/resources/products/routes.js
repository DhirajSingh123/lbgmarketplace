const express = require("express");
const { filterProducts } = require("./product-controller");
const router = express.Router();
const errorResponse = require("../../utility/errorresponse.json");
const {
  errorResponseHandler,
} = require("../../utility/errorResponseHandler");
const constant = require("../../utility/constant");

router.get("/filter", async (req, res) => {
  try {
    const products = await filterProducts(req.query);
    res.json(products);
  } catch (err) {
    res
      .status(constant.STATUS400)
      .json(errorResponseHandler(errorResponse[constant.ERRORMSG400]));
  }
});

module.exports = router;
