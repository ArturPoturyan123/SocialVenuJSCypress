const fs = require('fs');

const gitignoreContent = `# Ignore Allure report results
allure-report/
allure-results/
`;

fs.writeFile('.gitignore', gitignoreContent, (err) => {
  if (err) {
    console.error('Error creating .gitignore file:', err);
  } else {
    console.log('.gitignore file created successfully.');
  }
});