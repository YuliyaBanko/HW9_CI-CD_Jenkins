const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3hrf6z",
  env: {
    username: 'yuliya2',
    password: 'Zuzu2',
  },
  e2e: {
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com/",
    setupNodeEvents(on, config) {
    },
  },
});