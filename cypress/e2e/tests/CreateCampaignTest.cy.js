import CampaignsMainPage from "../../pages/CampaignsMainPage";
import CreateCampaignPage from "../../pages/CreateCampaignPage";

const createCampaignPage = new CreateCampaignPage();
const campaignsMainPage = new CampaignsMainPage();

describe("",()=>{
    beforeEach(() => {
        cy.login();
    });
    
    it("verifyFunctionalityOfTheAppearTopBarInTheCreateCampaignFlow",() => {
        campaignsMainPage.open();
        campaignsMainPage.clickCreateNewCampaignBtn();
        cy.get(createCampaignPage.goBackButton).should("be.visible");
        cy.contains(createCampaignPage.createACampaignTitle).should('be.visible');
        cy.get(createCampaignPage.saveCreateBtn).should("be.visible");  
    })

    it("verifyFunctionalityOfReturnToCampaignListWithoutChange",() => {
        createCampaignPage.open();
        createCampaignPage.clickGoBackBtn();
        cy.get(campaignsMainPage.createNewCampaignBtn).should("be.visible"); 
    })

    it("verifyFunctionalityOfShowUnsavedChangesModal",() => {
        campaignsMainPage.open();
        campaignsMainPage.clickCreateNewCampaignBtn();
        createCampaignPage.clickBrowserBackButton(); 
        cy.contains(createCampaignPage.unsavedChangesModal).should('be.visible');
    })

    it("verifyFunctionalityOfCreatingNewDefaultCampaign",() => {
        createCampaignPage.open();
        createCampaignPage.openAllIncentiveCampaignSteps();
        createCampaignPage.clickCreateCampaignStep4();
        createCampaignPage.clickSelectBtn();
        createCampaignPage.clickPhoneNumber();
        createCampaignPage.setRewardPhoneNumber();
        createCampaignPage.clickSaveAndCreateButton();
        createCampaignPage.isElementPresent(createCampaignPage.editSmsInvitationButton)
    })


    it("verifyFunctionalityOfStep4NotDisplayedAfterSelectingAwarenessType", () => {
        createCampaignPage.open();
        createCampaignPage.clickAwarenessCampaignType();
        createCampaignPage.isElementNotPresentByXpath(createCampaignPage.campaignSte4);
      });      

      it("verifyFunctionalityOfStep4DisplayedAfterSelectingIncentiveType", () => {
        createCampaignPage.open();
        createCampaignPage.isElementPresentByXpath(createCampaignPage.campaignSte4);
      });      
})

