import { BasePage } from "./BasePage";
import 'cypress-xpath';
class MemberProfilePage extends BasePage {

    revokeInviteButton = 'Revoke Invite';
    deleteUserButton = "#delete-member-button";



    clickRemoveMemberBtn(){
        cy.contains(this.revokeInviteButton).should('be.visible').click({force: true});
    }

    deleteMember(){
        cy.get(this.deleteUserButton).should('be.visible').click({force: true});
    }



}

export default MemberProfilePage;