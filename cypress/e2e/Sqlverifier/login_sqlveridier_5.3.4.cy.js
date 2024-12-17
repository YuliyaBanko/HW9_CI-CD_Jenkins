const testData = require("../../fixtures/logindata.json");

describe("LoginSqlverifier", () => {
    it.that("successfulLogin", () => {
        cy.loginSQL(Cypress.env('username'), Cypress.env('password'));
        cy.get('[data-cy="docsMenu"]').should('exist');              
    });

    it("unsuccessfulLogin", () => {
        testData.forEach((item) => {
            cy.loginSQL(item.username, item.password);
            cy.get('[data-cy="docsMenu"]').should('not.exist'); 
        });             
    });
});