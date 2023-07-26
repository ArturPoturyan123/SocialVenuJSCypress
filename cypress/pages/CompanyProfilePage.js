import { BasePage } from "./BasePage";

class CompanyProfilePage extends BasePage {
  companyNameField = 'input[name="name"]';
  addressNameField = 'input[name="address"]';
  cityNameField = 'input[name="city"]';
  webSiteField = 'input[name="website"]';
  zipCodeField = 'input[name="zip"]';

  setRandomCityName() {
    this.eraseAllTextField(this.cityNameField);
    cy.wait(2000);
    cy.get(this.cityNameField).should("be.empty");
    const cityNames = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
    ];
    const randomIndex = Cypress._.random(0, cityNames.length - 1);
    const randomCityName = cityNames[randomIndex];
    cy.get(this.cityNameField).type(randomCityName);
  }

  setRandomCompanyWebsite() {
    this.eraseAllTextField(this.webSiteField);
    cy.wait(2000);
    cy.get(this.webSiteField).should("be.empty");
    const companyWebsites = [
      "youtube.com",
      "sv.com",
      "nike.com",
      "adidas.com",
      "fresh.com",
    ];
    const randomIndex = Cypress._.random(0, companyWebsites.length - 1);
    const randomWebsite = "https://" + companyWebsites[randomIndex];
    cy.get(this.webSiteField).type(randomWebsite);
  }

  setRandomCompanyName(randomText) {
    this.eraseAllTextField(this.companyNameField);
    cy.wait(2000);
    cy.get(this.companyNameField).should("be.empty");
    const valueString = "Test Automation Company Name " + randomText;
    cy.get(this.companyNameField).type(valueString);
  }

  setRandomCompanyAddress(randomText) {
    this.eraseAllTextField(this.addressNameField);
    cy.wait(2000);
    cy.get(this.addressNameField).should("be.empty");
    const valueString = "Test Automation Company Address " + randomText;
    cy.get(this.addressNameField).type(valueString);
  }

  setRandomZipCode() {
    this.eraseAllTextField(this.zipCodeField);
    cy.wait(2000);
    cy.get(this.zipCodeField).should("be.empty");
    const randomZipCode = String(10000 + Math.floor(Math.random() * 90000));
    cy.get(this.zipCodeField).clear({ force: true }).type(randomZipCode);
  }

  getCompanyName() {
    return cy
      .get(this.companyNameField)
      .invoke("val")
      .then((value) => {
        return value;
      });
  }

  getCityName() {
    return cy
      .get(this.cityNameField)
      .invoke("val")
      .then((value) => {
        return value;
      });
  }

  getCompanyAddress() {
    return cy
      .get(this.addressNameField)
      .invoke("val")
      .then((value) => {
        return value;
      });
  }

  getWebSiteUrl() {
    return cy
      .get(this.webSiteField)
      .invoke("val")
      .then((value) => {
        return value;
      });
  }

  getZipCode() {
    return cy
      .get(this.zipCodeField)
      .invoke("val")
      .then((value) => {
        return value;
      });
  }

  getUrl() {
    return super.getUrl("accounts/company");
  }
}

export default CompanyProfilePage;
