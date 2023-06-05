const service = require("./service");
const handler = require("../../utility/responseHandler");

const filterProducts = async (arg) => {
  let formattedResponse = "";

  const products = await service.getProducts(arg);
  if (products.length != 0) {
    formattedResponse = handler.formatResponse(products);
  } else {
    return products;
  }

  return formattedResponse;
};

module.exports = { filterProducts };
