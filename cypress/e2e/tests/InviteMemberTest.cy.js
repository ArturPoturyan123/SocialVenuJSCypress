import InviteMemberPage from "../../pages/InviteMemberPage";
import MemberManagementPage from "../../pages/MemberManagementPage";
import faker from 'faker';


const inviteMemberPage = new InviteMemberPage();
const memberManagmentPage = new MemberManagementPage();



  generateRandomData = () => {
    faker = require('faker');
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    };
  };

describe("",()=>{
    beforeEach(() => {
        cy.login();
    });
    
    it("verifyFunctionalityOFInvitationMember",() => {
        memberManagmentPage.open();
        const rowSize = memberManagmentPage.getRowCount();
        const randomData = generateRandomData();


        inviteMemberPage.open();
        inviteMemberPage
        .setFirstName(randomData.firstName);
        










    // cy.get('tr > td > svg[data-testid="EditIcon"]', { timeout: 2000 }).should('be.visible');


    })


})