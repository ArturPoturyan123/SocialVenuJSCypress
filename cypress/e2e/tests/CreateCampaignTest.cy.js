import CampaignsMainPage from "../../pages/CampaignsMainPage";
import CreateCampaignPage from "../../pages/CreateCampaignPage";

const createCampaignPage = new CreateCampaignPage();
const campaignsMainPage = new CampaignsMainPage();

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
    createCampaignPage.openAllIncentiveCampaignSteps();
    createCampaignPage.clickCreateCampaignStep4();
    createCampaignPage.clickSelectBtn();
    createCampaignPage.clickPhoneNumber();
    createCampaignPage.setRewardPhoneNumber();
    createCampaignPage.clickSaveAndCreateButton();
    createCampaignPage.isElementPresent(
      createCampaignPage.editSmsInvitationButton
    );
  });

  it("Verify the functionality of step 4 is not displayed after selecting awareness type", () => {
    createCampaignPage.open();
    createCampaignPage.clickAwarenessCampaignType();
    createCampaignPage.isElementNotPresentByXpath(
      createCampaignPage.campaignSte4
    );
  });

  it("Verify the functionality of step 4 displayed after selecting incentive type", () => {
    createCampaignPage.open();
    createCampaignPage.isElementPresentByXpath(createCampaignPage.campaignSte4);
  });
});
