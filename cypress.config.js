const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // allureWriter(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement other node event listeners here
      return config;
    },
    baseUrl: "https://dashboard-release.socialvenu.com/",
    BACKEND_URL: "https://sv-api-rc.socialvenu.com",
    email: "arthurp@doublecoconut.com",
    password: "123456",
  },
});
