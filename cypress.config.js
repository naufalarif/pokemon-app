// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require("./cypress/plugins")(on, config);
    },
  },
});
