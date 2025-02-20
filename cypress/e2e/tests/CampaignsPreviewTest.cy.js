import CampaignsPreviewPage from "../../pages/CampaignsPreviewPage";

describe("Campaigns Preview Page", () => {
  const campaignsPreviewPage = new CampaignsPreviewPage();

  beforeEach(() => {
    cy.login();
  });

  it("verify the functionality to opening the exact campaigns preview page", () => {
    campaignsPreviewPage.visit();
    campaignsPreviewPage.isElementPresentByXpath(
      campaignsPreviewPage.addYourCustomer
    );
  });

  // it("verify the functionality to opening welcome video popup", () => {
  //   campaignsPreviewPage.visit();
  //   campaignsPreviewPage.clickWelcomeVideoButton();
  //   campaignsPreviewPage.clickCustomizeButton();
  //   cy.checkTextExists(welcomeVideoPage.welcomeVideoTitle);
  // });
});
