import { BasePage } from "./BasePage";

class CampaignsPreviewPage extends BasePage {
  returnToCampaignsButton = "#return-to-campaigns-button";
  editCampaignButton = "#composition-button";
  welcomeVideoButton = "#Welcome-Video-button";

  clickEditCampaignButton() {
    cy.get(this.editCampaignButton).should("be.visible").click({ force: true });
  }
  clickWelcomeVideoButton() {
    cy.get(this.welcomeVideoButton).should("be.visible").click({ force: true });
  }
  getUrl() {
    return super.getUrl("reward-campaigns");
  }

  visit() {
    cy.visit("reward-campaigns/55506800-a8f0-4248-a364-42d6b84fd2d6");
  }
}
export default CampaignsPreviewPage;
