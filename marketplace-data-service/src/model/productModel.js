const mongoose = require("mongoose");
const config = require("../../src/config/index");

const productSchema = new mongoose.Schema({
  lbgDomains: {
    l0: [{ type: String }],
    l1: [{ type: String, required: false }],
    l2: [{ type: String, required: true }],
    l3: [{ type: String, required: true }],
  },
  brand: [{ type: String }],
  partitionKey: { type: String },
  name: { type: String },
  title: { type: String },
  productId: { type: String },
  gatewayType: { type: String },
  businessLine: [{ type: String }],
  tenant: { type: String },
  apiCount: { type: String },
  url: { type: String },
  gatewayPlatform: { type: String },

  version: { type: String },
  regulatory: { type: Boolean },
  bankingNeed: [{ type: String }],
  valueStream: { type: String },
  apiConsumer: [{ type: String }],
  apiCategory: [{ type: String }],
  apiType: [{ type: String }],
});

module.exports = mongoose.model(config.collectionName, productSchema);
