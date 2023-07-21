import { BasePage } from "./BasePage";

class InviteMemberPage extends BasePage {



    nameField = "#name";






    setFirstName (name){
       return cy.get(this.nameField).type(name);
    }




    getUrl(){
        return super.getUrl("members/invite");
    }




}



export default InviteMemberPage;