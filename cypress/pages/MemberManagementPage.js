import { BasePage } from "./BasePage";


class MemberManagementPage extends BasePage {

 tableRows = () => cy.get("tbody[class*='MuiTableBody-root'] > tr");

 editButtonIndex = () => cy.get("tr > td > svg[data-testid='EditIcon']").eq(0);

 editButton = () => cy.get("tr > td > svg[data-testid='EditIcon']");


  getRowCount() {
    cy.wait(2000);
    return  cy.get(this.tableRows).its('length').as('initialRowCount');
  }

  clickEditButton(){
    cy.get(this.editButton).should("be.visible").eq(0).click({force: true});
  }


    getUrl(){
        return super.getUrl("accounts/members");
    }
}



export default MemberManagementPage;