import DasboardLoginPage from "../../pages/DashboardLoginPage";

const dasboardLoginPage = new DasboardLoginPage();

describe("Verify the functionality of Sign in into SV Dashboard",()=>{
    it("verifyFunctionalitySignInSvDashboard",() => {
        dasboardLoginPage.visit();
        dasboardLoginPage.emailField(Cypress.config('email'));
        dasboardLoginPage.passwordField(Cypress.config('password'));
        dasboardLoginPage.pressSignInButton();
        cy.url().should('include','profile/accounts');
        cy.contains(dasboardLoginPage.allAccountsButton()).should('exist');
    })    
})