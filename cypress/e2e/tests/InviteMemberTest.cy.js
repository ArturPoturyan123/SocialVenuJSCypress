import InviteMemberPage from "../../pages/InviteMemberPage";
import MemberManagementPage from "../../pages/MemberManagementPage";
const { generateRandomFirstName } = require('../randomDataGenerator');

const inviteMemberPage = new InviteMemberPage();
const memberManagmentPage = new MemberManagementPage();



describe("",()=>{
    beforeEach(() => {
        cy.login();
    });
    
    it("verifyFunctionalityOFInvitationMember",() => {
        memberManagmentPage.open();
        const rowSize = memberManagmentPage.getRowCount();
        inviteMemberPage.open();
        const randomFirstName = generateRandomFirstName();
        inviteMemberPage
        .setFirstName(randomFirstName);
        










    // cy.get('tr > td > svg[data-testid="EditIcon"]', { timeout: 2000 }).should('be.visible');


    })


})