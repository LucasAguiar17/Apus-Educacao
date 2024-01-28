const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  
    "specPattern": "cypress/e2e/step_definitions/*.feature"
  },"env": {
    "failOnStatusCode": false,
    "USER":"91358566020",
    "PASSWORD": "123456789"
  }
});
