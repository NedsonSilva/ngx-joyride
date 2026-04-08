const { defineConfig } = require('cypress');

module.exports = defineConfig({
    video: false,
    e2e: {
        baseUrl: 'http://localhost:4500',
        specPattern: 'cypress/integration/**/*.js',
        supportFile: 'cypress/support/index.js',
        setupNodeEvents(on, config) {
            return config;
        },
    },
});
