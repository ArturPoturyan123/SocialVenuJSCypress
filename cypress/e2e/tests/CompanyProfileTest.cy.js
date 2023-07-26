import CompanyProfilePage from "../../pages/CompanyProfilePage";



const companyProfilePage = new CompanyProfilePage();

describe("",()=>{
    beforeEach(() => {
        cy.login();
    });

    it("verifyFunctionalitySavingNewCompanyName",() => {
        companyProfilePage.open();
        const randomText = companyProfilePage.getString();
        companyProfilePage.setRandomCompanyName(randomText);
        const setNewCompanyName = companyProfilePage.getCompanyName().toString();
        companyProfilePage.clickSaveButton();
        const getCurrentCompanyName = companyProfilePage.getCompanyName().toString();
        expect(setNewCompanyName).to.equal(getCurrentCompanyName);
    })

  it("verifyFunctionalitySavingNewCompanyAddress",() => {
        companyProfilePage.open();
        const randomText = companyProfilePage.getString();
        companyProfilePage.setRandomCompanyAddress(randomText);
        const setNewCompanyAddress = companyProfilePage.getCompanyAddress().toString();
        companyProfilePage.clickSaveButton();
        const getCurrentCompanyAddress = companyProfilePage.getCompanyAddress().toString();
        expect(setNewCompanyAddress).to.equal(getCurrentCompanyAddress);
    })

    it("verifyFunctionalitySavingNewCompanyAddress",() => {
        companyProfilePage.open();
        companyProfilePage.setRandomCityName();
        const newCityName = companyProfilePage.getCityName().toString();
        companyProfilePage.clickSaveButton();
        const getCurrentCityName = companyProfilePage.getCityName().toString();
        expect(newCityName).to.equal(getCurrentCityName);
    })

    it("verifyFunctionalitySavingNewCompanyWebSite",() => {
        companyProfilePage.open();
        companyProfilePage.setRandomCompanyWebsite();
        const newWebsiteUrl = companyProfilePage.getWebSiteUrl().toString();
        companyProfilePage.clickSaveButton();
        const getCurrentWebSiteUrl = companyProfilePage.getWebSiteUrl().toString();
        expect(newWebsiteUrl).to.equal(getCurrentWebSiteUrl);
    })

    it("verifyFunctionalitySavingNewZipCode",() => {
        companyProfilePage.open();
        companyProfilePage.setRandomZipCode();
        const newZipCode = companyProfilePage.getZipCode().toString();
        companyProfilePage.clickSaveButton();
        const getCurrentZipCode = companyProfilePage.getZipCode().toString();
        expect(newZipCode).to.equal(getCurrentZipCode);
    })
})
