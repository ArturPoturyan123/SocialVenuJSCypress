const { defineConfig } = require("cypress");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SocialVenu Dashboard Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      
      // allureWriter(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement other node event listeners here
      // return config;
    },
    
    baseUrl: "https://dashboard-release.socialvenu.com/",
    BACKEND_URL: "https://sv-api-rc.socialvenu.com",
    email: "arthurp@doublecoconut.com",
    password: "123456",
  },
});