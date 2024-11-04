const testData = require("../../fixtures/registrdata.json");

describe("Registration", () => {
    it("successfulRegistration", () => {
        cy.registrSQL(Cypress.env('username1'), Cypress.env('newpassword1'),Cypress.env('newpassword2'), Cypress.env('email'));
        cy.get(".invalid-feedback").should('not.exist');              
    });

    it("unsuccessfulRegistration", () => {
        testData.forEach((item) => {
            cy.registrSQL(item.username1, item.newpassword1, item.newpassword2, item.email);
            cy.get(".invalid-feedback").should('exist');  
        });             
    });
});
