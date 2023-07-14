import { BasePage } from "./BasePage";


class CompanyProfilePage extends BasePage {


    companyNameField = 'input[name="name"]';
    addressNameField = 'input[name="address"]';
    cityNameField = 'input[name="city"]';
    webSiteField = 'input[name="website"]';
    zipCodeField = 'input[name="zip"]';



    setRandomCityName(){
        this.eraseAllTextField(this.cityNameField);
        cy.get(this.cityNameField).should('be.empty');
        const cityNames = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];
        const randomIndex = Cypress._.random(0, cityNames.length - 1);
        const randomCityName = cityNames[randomIndex];
        cy.get(this.cityNameField).clear({force: true}).type(randomCityName);
    }

    setRandomCompanyWebsite(){
       const companyWebsites = ["youtube.com", "sv.com", "nike.com", "adidas.com", "fresh.com"];
       const randomIndex = Cypress._.random(0, companyWebsites.length - 1);
       const randomWebsite = "https://" + companyWebsites[randomIndex];
       cy.get(this.webSiteField).clear({force: true}).type(randomWebsite);
       
    }

    setRandomCompanyName(randomText){
        const valueString = "Test Automation Company Name " + randomText;
        cy.get(this.companyNameField).clear({force: true}).type(valueString);
    }
    
    setRandomCompanyAddress(randomText){
        const valueString = "Test Automation Company Address " + randomText;
        cy.get(this.addressNameField).clear({force: true}).type(valueString);
    }

    setRandomZipCode(){
        const randomZipCode = String(10000 + Math.floor(Math.random() * 90000));
        cy.get(this.zipCodeField).clear({force: true}).type(randomZipCode);

    }

     getCompanyName() {
        return cy.get(this.companyNameField).invoke('val').then((value) => {
          return value;
        });
    }

      getCityName (){
        return cy.get(this.cityNameField).invoke('val').then((value) => {
            return value;
          });
      }

      getCompanyAddress() {
        return cy.get(this.companyNameField).invoke('val').then((value) => {
            return value;
          });
      }

      getWebSiteUrl(){
        return cy.get(this.webSiteField).invoke('val').then((value) => {
            return value;
          });
      }
      
      getZipCode(){
        return cy.get(this.zipCodeField).invoke('val').then((value) => {
            return value;
          });
      }
      
    getUrl(){
        return super.getUrl("accounts/company");
    }
}

export default CompanyProfilePage;
