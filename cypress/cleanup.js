const fs = require('fs-extra');

// Define the path to the Allure results directory
const allureResultsDirectory = 'cypress/allure-results'; // Adjust the path based on your project structure

// Delete the Allure results directory
fs.removeSync(allureResultsDirectory);

console.log(`Allure results directory "${allure-results}" has been deleted.`);
