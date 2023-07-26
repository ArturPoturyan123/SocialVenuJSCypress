import CompanyProfilePage from "../../pages/CompanyProfilePage";

const companyProfilePage = new CompanyProfilePage();

describe("", () => {
  cy.allureDescription("This is a description for my test");  
  beforeEach(() => {
    cy.login();
  });

  it("Verify the functionality of saving Company Name", () => {
    companyProfilePage.open();
    const randomText = companyProfilePage.getString();
    companyProfilePage.setRandomCompanyName(randomText);
    companyProfilePage.getCompanyName().then((setNewCompanyName) => {
      setNewCompanyName = setNewCompanyName.trim();
      companyProfilePage.clickSaveButton();
      companyProfilePage.getCompanyName().then((getCurrentCompanyName) => {
        getCurrentCompanyName = getCurrentCompanyName.trim();
        expect(setNewCompanyName).to.equal(getCurrentCompanyName);
      });
    });
  });

  it("Verify the functionality of saving Company Address", () => {
    companyProfilePage.open();
    const randomText = companyProfilePage.getString();
    companyProfilePage.setRandomCompanyAddress(randomText);
    companyProfilePage
      .getCompanyAddress()
      .then((setNewCompanyAddressElement) => {
        const setNewCompanyAddress = setNewCompanyAddressElement.trim();
        companyProfilePage.clickSaveButton();
        companyProfilePage
          .getCompanyAddress()
          .then((getCurrentCompanyAddressElement) => {
            const getCurrentCompanyAddress =
              getCurrentCompanyAddressElement.trim();
            expect(setNewCompanyAddress).to.equal(getCurrentCompanyAddress);
          });
      });
  });

  it("Verify the functionality of saving City name", () => {
    companyProfilePage.open();
    companyProfilePage.setRandomCityName();
    companyProfilePage.getCityName().then((newCityElement) => {
      const newCityName = newCityElement.trim();
      companyProfilePage.clickSaveButton();
      companyProfilePage.getCityName().then((getCurrentCityElement) => {
        const getCurrentCityName = getCurrentCityElement.trim();
        expect(newCityName).to.equal(getCurrentCityName);
      });
    });
  });

  it("Verify the functionality of saving Company Web site url", () => {
    companyProfilePage.open();
    companyProfilePage.setRandomCompanyWebsite();
    companyProfilePage.getWebSiteUrl().then((setNewWebsiteUrlElement) => {
      const setNewWebstieUrl = setNewWebsiteUrlElement.trim();
      companyProfilePage.clickSaveButton();
      companyProfilePage.getWebSiteUrl().then((getCurrentWebstieElement) => {
        const getCurrentWebSiteUrl = getCurrentWebstieElement.trim();
        expect(setNewWebstieUrl).to.equal(getCurrentWebSiteUrl);
      });
    });
  });

  it("Verify the functionality of saving Zip Code", () => {
    companyProfilePage.open();
    companyProfilePage.setRandomZipCode();
    companyProfilePage.getZipCode().then((newZipCodeElement) => {
      const newZipCode = newZipCodeElement.trim();
      companyProfilePage.clickSaveButton();
      companyProfilePage.getZipCode().then((getCurrentZipCodeElement) => {
        const getCurrentZipCode = getCurrentZipCodeElement.trim();
        expect(newZipCode).to.equal(getCurrentZipCode);
      });
    });
  });
});
