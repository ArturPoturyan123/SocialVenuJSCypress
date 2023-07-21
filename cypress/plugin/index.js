const path = require('path');

module.exports = (on, config) => {
  config.webpack.resolve.alias = {
    ...config.webpack.resolve.alias,
    faker: 'faker',
  };
  return config;
};
