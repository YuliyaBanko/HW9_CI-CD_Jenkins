const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3hrf6z",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
