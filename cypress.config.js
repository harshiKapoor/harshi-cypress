const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.greatsouthernbank.com.au/",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
  env: {
    grepFilterSpecs: true,
  }
});
