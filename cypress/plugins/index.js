// Import the custom random data generator
const randomData = require('./path/to/custom/randomDataGenerator');

module.exports = (on, config) => {
  // Alias 'faker' to the custom random data generator
  config.webpack.resolve.alias = {
    ...config.webpack.resolve.alias,
    faker: randomData,
  };
  return config;
};
