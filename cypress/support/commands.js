Cypress.Commands.add('switchLanguage', (language, expectedText) => {
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.contains(language).click();
    cy.get(":nth-child(1) > .d-flex").should('have.text', expectedText);
});
