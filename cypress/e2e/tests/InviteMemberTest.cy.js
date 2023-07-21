import InviteMemberPage from "../../pages/InviteMemberPage";
import MemberManagementPage from "../../pages/MemberManagementPage";

const inviteMemberPage = new InviteMemberPage();
const memberManagementPage = new MemberManagementPage();
const randomDataGenerator = require('../../plugins/randomDataGenerator');



describe("",()=>{
    beforeEach(() => {
        cy.login();
    });
    

    
    it("verifyFunctionalityOFInvitationMember", () => {
        const randomData = randomDataGenerator();
        memberManagementPage.open();
        cy.wait(4000);
        let initialRowCount;
        memberManagementPage.getRowCount().then(count => {
          initialRowCount = count;
          cy.log(`Initial Row Count: ${initialRowCount}`);
          console.log('Initial Row Count (console log):', initialRowCount);
          cy.wait(2000);
          inviteMemberPage.open();
          inviteMemberPage.setFirstName(randomData.firstName);
          inviteMemberPage.setLastName(randomData.lastName);
          inviteMemberPage.setEmail(randomData.email);
          inviteMemberPage.setPhoneNumber(randomData.phone);
          inviteMemberPage.clickInviteButton();
          memberManagementPage.getRowCount().should('eq', initialRowCount + 1);
      });
    });
})