const formatResponse = (products) => {
  return products.map((product) => {
    const {
      id,
      title,
      regulatory,
      lbgDomains,
      version,
      brand,
      name,
      productId,
      gatewayType,
      businessLine,
      valueStream,
      tenant,
      apiConsumer,
      apiCategory,
      apiType,
      apiCount,
      url,
      gatewayPlatform,
    } = product;

    const _lbgDomains = {};
    for (const key in lbgDomains) {
      if (Object.hasOwnProperty.call(lbgDomains, key)) {
        const element = lbgDomains[key];
        _lbgDomains[key.toUpperCase()] = element;
      }
    }

    return {
      id,
      lbgDomains: _lbgDomains,
      name,
      title,
      version,
      productId,
      gatewayType,
      businessLines: businessLine,
      valueStream,
      tenant,
      brands: brand,
      regulatory,
      apiConsumers: apiConsumer,
      apiCategories: apiCategory,
      apiTypes: apiType,
      apiCount,
      url,
      gatewayPlatform,
    };
  });
};

module.exports = {
  formatResponse,
};
