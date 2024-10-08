import { BasePage } from "./BasePage";

class CampaignsPreviewPage extends BasePage {
  addYourCustomer = "Add Your Customers";
  welcomeVideo = "Welcome Video";
  customizeButton = "Customize";



  getUrl() {
    return super.getUrl("reward-campaigns");
  }
  clickWelcomeVideoButton() {
    cy.contains(this.welcomeVideo).should('be.visible').click({ force: true });
}
clickCustomizeButton() {
  cy.contains(this.customizeButton).should('be.visible').click({ force: true });
}
  visit() {
    cy.visit("reward-campaigns/55506800-a8f0-4248-a364-42d6b84fd2d6");
  }
}
export default CampaignsPreviewPage;
