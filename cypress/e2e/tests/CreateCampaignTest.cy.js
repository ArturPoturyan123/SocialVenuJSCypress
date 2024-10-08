import CampaignsMainPage from "../../pages/CampaignsMainPage";
import CampaignsPreviewPage from "../../pages/CampaignsPreviewPage";
import CreateCampaignPage from "../../pages/CreateCampaignPage";

const createCampaignPage = new CreateCampaignPage();
const campaignsMainPage = new CampaignsMainPage();
const campaignsPreviewPage = new CampaignsPreviewPage();

describe("", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Verify the functionality of the shows Top Bar on the Create Campaign page", () => {
    campaignsMainPage.open();
    campaignsMainPage.clickCreateNewCampaignBtn();
    cy.get(createCampaignPage.goBackButton).should("be.visible");
    cy.contains(createCampaignPage.createACampaignTitle).should("be.visible");
    cy.get(createCampaignPage.saveCreateBtn).should("be.visible");
  });

  it("Verify the functionality of return to campaign list", () => {
    createCampaignPage.open();
    createCampaignPage.clickGoBackBtn();
    cy.get(campaignsMainPage.createNewCampaignBtn).should("be.visible");
  });

  it("Verify the functionality of show Unsaved changes modal", () => {
    campaignsMainPage.open();
    campaignsMainPage.clickCreateNewCampaignBtn();
    createCampaignPage.clickBrowserBackButton();
    cy.contains(createCampaignPage.unsavedChangesModal).should("be.visible");
  });

  it("Verify the functionality of creating new default campaign", () => {
    createCampaignPage.open();
    createCampaignPage.setCampaignRewardName();
    createCampaignPage.openAllIncentiveCampaignSteps();
    createCampaignPage.clickSelectBtn();
    createCampaignPage.clickSaveAndCreateButton();
    campaignsPreviewPage.isElementPresentByXpath(
      campaignsPreviewPage.addYourCustomer
    );
  });
});
