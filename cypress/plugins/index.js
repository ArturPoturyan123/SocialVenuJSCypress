const generateRandomData = require("../randomDataGenerator");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  // Add the random data generator as 'faker' to the Cypress config
  config.env.faker = generateRandomData;

  // Register the Allure plugin
  allureWriter(on, config);

  // Add other plugins or configurations if needed

  return config;
};
