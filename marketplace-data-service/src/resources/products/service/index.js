const Model = require("../../../model/productModel");
const constant = require("../../../utility/constant");
const getProducts = async (arg) => {
  

  let products = " ";
  if (arg.l0) {
    const l1 = arg.l1 ? { "lbgDomains.l1": arg.l1 } : {};
    const l2 = arg.l2 ? { "lbgDomains.l2": arg.l2 } : {};
    const brand = arg.brand ? { brand: arg.brand } : {};
    const regulatory = arg.regulatory ? { regulatory: arg.regulatory } : {};
    const bankingNeed = arg.bankingNeed ? { bankingNeed: arg.bankingNeed } : {};
    const valueStream = arg.valueStream ? { valueStream: arg.valueStream } : {};
    const apiConsumer = arg.apiConsumers
      ? { apiConsumers: arg.apiConsumers }
      : {};
    const apiCategorie = arg.apiCategories
      ? { apiCategories: arg.apiCategories }
      : {};
    const apiType = arg.apiTypes ? { apiTypes: arg.apiTypes } : {};
    products = await Model.find({
      $and: [
        { partitionKey: arg.l0 },
        l1,
        l2,
        brand,
        regulatory,
        bankingNeed,
        valueStream,
        apiConsumer,
        apiCategorie,
        apiType,
      ],
    });
  } else {
    throw constant.ERROR404;
  }
  return products;
};

module.exports = { getProducts };
