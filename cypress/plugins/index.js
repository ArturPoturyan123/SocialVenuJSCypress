// plugins/index.js
const generateRandomData = require('../randomDataGenerator');

module.exports = (on, config) => {
  // Add the random data generator as 'faker' to the Cypress config
  config.env.faker = generateRandomData;

  // Add other plugins or configurations if needed

  return config;
};
