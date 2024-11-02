const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3hrf6z",
  env: {
    username: 'yuliya', 
    password: 'Zuzu',
  },
  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    setupNodeEvents(on, config) {
    },
  },
});
