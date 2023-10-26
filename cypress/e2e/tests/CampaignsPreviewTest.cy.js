import CampaignsPreviewPage from "../../pages/CampaignsPreviewPage";
import WelcomeVideoPage from "../../pages/WelcomeVideoPage";

describe("Campaigns Preview Page", () => {
  const campaignsPreviewPage = new CampaignsPreviewPage();
  const welcomeVideoPage = new WelcomeVideoPage();

  beforeEach(() => {
    cy.login();
  });

  it("verify the functionality to opening the exact campaigns preview page", () => {
    campaignsPreviewPage.visit();
    cy.get(campaignsPreviewPage.returnToCampaignsButton).should("be.visible");
  });

  it("verify the functionality to opening welcome video popup", () => {
    campaignsPreviewPage.visit();
    campaignsPreviewPage.clickEditCampaignButton();
    campaignsPreviewPage.clickWelcomeVideoButton();
    cy.checkTextExists(welcomeVideoPage.welcomeVideoTitle);
  });
});
