const config = {};

config.port = process.env.APP_PORT | 3006;
config.host = process.env.APP_HOST || 'localhost';
config.restApiRoot = '/marketplace-data-service/v1';
config.dbUrl ="mongodb://test-cosmos-mongo-market:ULoNzpQ9AsJdqvda2JFIMaNtZU7o9GZacR32KWdHuVwyZYUPX9MhtpbMSoNQFmTvPkJpDqGhOeGxDwDZXlHJsQ==@test-cosmos-mongo-market.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@test-cosmos-mongo-market@";
config.collectionName='metadata';
module.exports = config;