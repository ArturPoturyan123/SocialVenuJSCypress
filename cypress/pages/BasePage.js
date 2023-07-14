export  class BasePage{
  
    
    getUrl(url){
        return url;
    }
    
    open(){
      cy.visit(this.getUrl())
    }

    clickBrowserBackButton(){
      cy.go("back");
    }

    eraseAllTextField(element){
      cy.get(element).clear({force: true});
    }

    waitTextFieldShouldBeEmpty(element, condition, empty) {
      cy.get(element).should(condition, empty);
    }

    waitElementToPresent(element){
      cy.get(element).should('be.visible').should('not.be.disabled');
    }


    generateRandomNumber() {
      const randomNumber = Math.floor(Math.random() * 1000000000);
      return `${randomNumber}`.padStart(10, '0');
    }

    isElementPresent(element) {
      cy.get(element).should('exist');
    }

    isElementNotPresentByXpath(element) {
      cy.contains(element).should('not.exist');
    }
    isElementPresentByXpath(element) {
      cy.contains(element).should('exist');
    }
}

