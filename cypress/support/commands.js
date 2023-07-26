// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: `https://sv-api-rc.socialvenu.com/api/v1/auth/customer`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "arthurp@doublecoconut.com",
      password: "123456",
    }),
  }).then((resp) => {
    window.localStorage.setItem("authToken", resp.body.accessToken);
    window.localStorage.setItem(
      "selectedVenue",
      "d99fb02b-a31b-418c-a206-36c5fad999ba"
    );
    window.localStorage.setItem("authResponse", JSON.stringify(resp.body));
  });
});
