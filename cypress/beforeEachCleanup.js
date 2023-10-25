// cypress/integration/beforeEachCleanup.js

// Import the child process module to execute the cleanup script
const { execSync } = require('child_process');

// Before each test suite, execute the cleanup script to clear the allure-results folder
before(() => {
  console.log('Cleaning up Allure results directory...');
  execSync('node cleanup.js');
});
