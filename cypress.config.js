const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://dashboard-release.socialvenu.com/",
    BACKEND_URL:"https://sv-api-rc.socialvenu.com",
    email:"arthurp@doublecoconut.com",
    password:"123456",
  },
});
const path = require('path');

module.exports = (on, config) => {
  config.webpack.resolve.alias = {
    ...config.webpack.resolve.alias,
    faker: path.resolve(__dirname, '../../node_modules/faker'),
  };
  return config;
};

