describe('Header is working', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.get('input[name="username"]').type('yuliya'); 
        cy.get('input[name="password"]').type('Zuzu'); 
        cy.get('button[type="submit"]').click();
    });

    it('should display brand title', () => {
        cy.get('.brand-title span').should('have.text', 'Sqlverifier');
    });

    it('Home button navigates to home page', () => {
        cy.contains('span', 'Home').should('be.visible').click();
        cy.url().should('eq', Cypress.config().baseUrl);
    });

    it('Entities button navigates to Task page', () => {
        cy.contains('span', 'Entities').should('be.visible').click();
        cy.contains('span', 'Task').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}task?page=1&sort=id,asc`);
    });

    it('Should display English button and check its visibility', () => {
        cy.contains('span', 'English').should('be.visible');
    });

    it('Swagger button navigates to Swagger docs', () => {
        cy.contains('span', 'Swagger').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}?page=1&sort=id,asc`);
    });

    it('should display Account menu and check items', () => {
        cy.contains('span', 'Account').should('be.visible').click();
        cy.get('[data-cy="accountMenu"]').should('have.length.greaterThan', 0)
            .first().should('contain.text', 'Account Settings Password Sign out');
    });

    it('should navigate to Settings page', () => {
        cy.contains('span', 'Account').should('be.visible').click();
        cy.get('[data-cy="settings"]').should('be.visible').click({ force: true });
        cy.url().should('eq', `${Cypress.config().baseUrl}account/settings`);
    });

    it('should navigate to Password page', () => {
        cy.contains('span', 'Account').should('be.visible').click();
        cy.get('[data-cy="passwordItem"]').should('be.visible').click({ force: true });
        cy.url().should('eq', `${Cypress.config().baseUrl}account/password`);
    });

    it('should Signout user', () => {
        cy.contains('span', 'Account').should('be.visible').click();
        cy.get('[data-cy="logout"]').should('be.visible').click({ force: true });
        cy.url().should('eq', `${Cypress.config().baseUrl}logout`);
    });
});