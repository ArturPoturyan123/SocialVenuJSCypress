import { BasePage } from "./BasePage";

class CampaignsPreviewPage extends BasePage {
  returnToCampaignsButton = "#return-to-campaigns-button";
  getUrl() {
    return super.getUrl("reward-campaigns");
  }

  visit() {
    cy.visit("reward-campaigns/55506800-a8f0-4248-a364-42d6b84fd2d6");
  }
}
export default CampaignsPreviewPage;
