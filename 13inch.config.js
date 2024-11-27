const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5ik66m",
  video: false,
  viewportWidth: 1280,
  viewportHeight: 800, 
  env: {
    username: "yuliya",
    password: "Zuzu", 
    authToken: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMyNzE1NjU4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMjYyOTI1OH0.hx375H8PgaAKGhbr0V8iZ_Ti6PfkCNxm8rdrx7dgfWm4aZlvPN1uivIZgpg5m7w4qTcL2yp4xVshy9Gyd2MmWw", 
  },
  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com", 
  },
});


