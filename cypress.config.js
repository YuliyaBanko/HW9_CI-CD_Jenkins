const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "3hrf6z",
    chromeWebSecurity: false,
    env: {
        username: "yuliya",  
        password: "Zuzu",
        username1: "Muku",  
        newpassword1: "kuku",
        newpassword2: "kuku",
        email: "Muku@mail.com",      
    },
    e2e: {
        baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
        setupNodeEvents(on, config) {
        },
    },
});
