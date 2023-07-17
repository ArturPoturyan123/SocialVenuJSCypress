import InviteMemberPage from "../../pages/InviteMemberPage";
import MemberManagementPage from "../../pages/MemberManagementPage";

const inviteMemberPage = new InviteMemberPage();
const memberManagmentPage = new MemberManagementPage();


describe("",()=>{
    beforeEach(() => {
        cy.login();
    });
    
    it("verifyFunctionalityOFInvitationMember",() => {
        memberManagmentPage.open();
    })


})