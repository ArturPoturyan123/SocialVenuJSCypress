import { BasePage } from "./BasePage";

class InviteMemberPage extends BasePage {



    nameField = "#name";
    lastNameField = "#lastName";
    emailField = "#email";
    phoneNumberField = "#phone";
    inviteButton = '[class*="MuiButton-containedPrimary"]';



    clickInviteButton(){
        cy.get(this.inviteButton).should('be.enabled').click({force:true});
    }


    setFirstName (name){
        return cy.get(this.nameField).type(name, { force: true });
    }
    setLastName (name){
        return cy.get(this.lastNameField).type(name, { force: true });
    }
    setEmail (name){
        return cy.get(this.emailField).type(name, { force: true });
    }
    setPhoneNumber (name){
        return cy.get(this.phoneNumberField).type(name, { force: true });
    }





    getUrl(){
        return super.getUrl("members/invite");
    }




}



export default InviteMemberPage;