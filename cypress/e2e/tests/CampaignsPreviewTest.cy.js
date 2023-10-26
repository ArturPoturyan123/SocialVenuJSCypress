import CampaignsPreviewPage from "../../pages/CampaignsPreviewPage";

describe("Campaigns Preview Page", () => {
  const campaignsPreviewPage = new CampaignsPreviewPage();

  beforeEach(() => {
    cy.login();
  });

  it("verify the functionality to open the exact campaigns preview page", () => {
    campaignsPreviewPage.visit();
    cy.get(campaignsPreviewPage.returnToCampaignsButton).should("be.visible");
  });
});
