class DasboardLoginPage{

    email = 'input[name="email"]';
    password = 'input[name="password"]';
    signInBtn = 'button[type="submit"]';
    allAccountsBtn = 'All Accounts';


    visit(){
        cy.visit("login")
    }

    emailField(text){
        cy.get(this.email).type(text,{ force:true });
    }

    passwordField(text){
        cy.get(this.password).type(text,{ force:true });
    }

    pressSignInButton(){
       cy.get(this.signInBtn).click({ force:true });
    }

    allAccountsButton(){
        return this.allAccountsBtn;
    }


}

export default DasboardLoginPage;