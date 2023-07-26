import MemberProfilePage from "../../pages/MemberProfilePage";
import MemberManagementPage from "../../pages/MemberManagementPage";


const memberProfilePage = new MemberProfilePage();
const memberManagementPage = new MemberManagementPage();



describe("Dashboard", () => {
    beforeEach(() => {
      cy.login();
    });
  
    it("Verify the functionality of delete Member from Member Management list", () => {
        memberManagementPage.open();
        cy.wait(4000);
        let initialRowCount;
        memberManagementPage.getRowCount().then(count => {
          initialRowCount = count;
          cy.log(`Initial Row Count: ${initialRowCount}`);
          console.log('Initial Row Count (console log):', initialRowCount);
          memberManagementPage.clickEditButton();
          memberProfilePage.clickRemoveMemberBtn();
          memberProfilePage.deleteMember();
          memberManagementPage.getRowCount().should('eq', initialRowCount - 1);
      });
    });
});