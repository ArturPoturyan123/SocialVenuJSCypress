export class BasePage {
  saveButton = "#bottom-bar-save-action";

  clickSaveButton() {
    cy.wait(2000);
    this.isElementPresent(this.saveButton);
    cy.get(this.saveButton).click({ force: true });
  }

  getUrl(url) {
    return url;
  }

  open() {
    cy.visit(this.getUrl());
  }

  clickBrowserBackButton() {
    cy.go("back");
  }

  eraseAllTextField(element) {
    cy.get(element).clear({ force: true });
  }

  waitTextFieldShouldBeEmpty(element, condition, empty) {
    cy.get(element).should(condition, empty);
  }

  waitElementToPresent(element) {
    cy.get(element).should("be.visible").should("not.be.disabled");
  }

  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    return `${randomNumber}`.padStart(10, "0");
  }

  isElementPresent(element) {
    return cy.get(element).should("exist");
  }

  isElementNotPresentByXpath(element) {
    cy.contains(element).should("not.exist");
  }

  isElementPresentByXpath(element) {
    cy.contains(element).should("exist");
  }

  getRandomNumericString(length) {
    var random = Math.random;
    var sb = [];
    for (var i = 0; i < length; i++) {
      sb.push(Math.floor(random() * 10));
    }
    return sb.join("");
  }

  getString() {
    return "test " + this.getRandomNumericString(5);
  }
}
