import { BasePage } from "./BasePage";

class MyProfilePage extends BasePage {
  accountNameField = 'input[name="name"]';
  saveChangesButton = "#save-changes-button";

  setAccountName(randomText) {
    this.eraseAllTextField(this.accountNameField);
    cy.wait(2000);
    cy.get(this.accountNameField).should("be.empty");
    const valueString = "Test Automation Account Name " + randomText;
    cy.get(this.accountNameField).type(valueString);
  }

  getAccoutName() {
    return cy
      .get(this.accountNameField)
      .invoke("val")
      .then((value) => {
        return value;
      });
  }

  clickSaveChangesButton() {
    cy.get(this.saveChangesButton).should("be.enabled").click({ force: true });
  }

  getUrl() {
    return super.getUrl("accounts/profile");
  }
}
export default MyProfilePage;
