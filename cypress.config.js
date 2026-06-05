const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require('dotenv').config();

module.exports = defineConfig({
  // allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/pages/*.feature",
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD
    },
  },
});
