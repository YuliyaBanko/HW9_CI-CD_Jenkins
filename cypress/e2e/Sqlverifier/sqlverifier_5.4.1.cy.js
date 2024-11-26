import { faker } from '@faker-js/faker';
import { LoginPageSQL } from '../../fixtures/pages/sqlloginpage';

describe("Sqlverifier login - UI",()=> {
    it("User cant logIn with old password", ()=>{
        
        let loginPageSQL = new LoginPageSQL();
        let oldPasswordSQL = "Koko";
        let newPasswordSQL = faker.internet.password(10);
        let username = "Koko";

        cy.log("Generated new password:", newPasswordSQL);

        cy.visit("/");
        loginPageSQL.login(username, oldPasswordSQL);
        loginPageSQL.elements.entityMenu().should("exist");

        cy.changePasswordSQL(oldPasswordSQL,newPasswordSQL);
        loginPageSQL.elements.accountMenu().click();
        loginPageSQL.elements.logOutButton().click();
        cy.get('h4').should("exist");

        loginPageSQL.login(username, oldPasswordSQL);
        cy.get('strong').should("exist");

        loginPageSQL.elements.passwordField().clear().type(newPasswordSQL);
        loginPageSQL.elements.signInButton().click();
        cy.changePasswordSQL(newPasswordSQL, oldPasswordSQL);
    })
})


