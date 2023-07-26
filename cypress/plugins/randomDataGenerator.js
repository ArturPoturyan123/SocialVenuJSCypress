// Import any other libraries you may need to generate random data
const Chance = require("chance");

const chance = new Chance(); // Create a new instance of Chance for generating random data

// Define a function to generate random data
const generateRandomData = () => {
  return {
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email(),
    phone: chance.phone({ formatted: false, country: "us" }), // Generate US phone numbers in non-formatted format
  };
};

// Export the generateRandomData function to be used as 'faker' in the Cypress environment
module.exports = generateRandomData;
