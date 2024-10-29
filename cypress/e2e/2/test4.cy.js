describe('Header is working', () => {
    before(() => {
        cy.visit('/login');
        cy.get('[data-cy="username"]').type('yuliya');
        cy.get('[data-cy="password"]').type('Zuzu'); 
        cy.get('[data-cy="submit"]').click();
    });

    it('should display brand title', () => {
        cy.get('.brand-title span').should('have.text', 'Sqlverifier');
        cy.contains('span', 'Home').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}`);
        cy.contains('span', 'Entities').should('be.visible').click();
        cy.contains('span', 'Task').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}task?page=1&sort=id,asc`);
        cy.contains('span', 'English').should('be.visible');
        cy.contains('span', 'Swagger').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}task?page=1&sort=id,asc`);
        cy.contains('span', 'Account').should('be.visible').click();
        cy.get('[data-cy="accountMenu"]').should('have.length.greaterThan', 0);
        cy.get('[data-cy="accountMenu"]').eq(0).should('have.text', 'Account Settings Password Sign out');
        cy.contains('Settings').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}account/settings`);
        cy.contains('span', 'Swagger').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}account/settings`);
    });
});
