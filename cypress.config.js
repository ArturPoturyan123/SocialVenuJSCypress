const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      // implement other node event listeners here
      return config;
    },
    baseUrl: "https://dashboard-release.socialvenu.com/",
    BACKEND_URL: "https://sv-api-rc.socialvenu.com",
    email: "arthurp@doublecoconut.com",
    password: "123456",
  },
});