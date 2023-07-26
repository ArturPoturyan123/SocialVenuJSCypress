import MyProfilePage from "../../pages/MyProfilePage";

const myProfilePage = new MyProfilePage();

describe("Dashboard", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Verify the functionality of saving a new account name", () => {
    myProfilePage.open();
    const randomText = myProfilePage.getString();
    myProfilePage.setAccountName(randomText);
    myProfilePage.getAccoutName().then((setNewAccoutName) => {
      setNewAccoutName = setNewAccoutName.trim();
      myProfilePage.clickSaveChangesButton();
      myProfilePage.getAccoutName().then((getCurrentAccountName) => {
        getCurrentAccountName = getCurrentAccountName.trim();
        cy.wait(3000);
        expect(setNewAccoutName).to.equal(getCurrentAccountName);
      });
    });
  });
});
