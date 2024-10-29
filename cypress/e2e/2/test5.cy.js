describe('Header is working', () => {
    before(() => {
        cy.visit('/login');
        cy.get('input[name="username"]').type('yuliya'); 
        cy.get('input[name="password"]').type('Zuzu'); 
        cy.get('button[type="submit"]').click();
    });

    it('should display brand title', () => {
        cy.get('.brand-title span').should('have.text', 'Sqlverifier');
    });

    it('Home button navigate', () => {
        cy.contains('span', 'Home').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}`);
    });

    it('Entities button navigate', () => {
        cy.contains('span', 'Entities').should('be.visible').click();
        cy.contains('span', 'Task').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}task?page=1&sort=id,asc`);
    });

    it('should display English button and check its visibility', () => {
        cy.contains('span', 'English').should('be.visible');
    });

    it('should display Swagger button and navigate', () => {
        cy.contains('span', 'Swagger').should('be.visible').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}/docs/docs`);
    });

    it('should display Account menu and check items', () => {
        cy.contains('span', 'Account').should('be.visible').click();
        cy.get('[data-cy="accountMenu"]').should('have.length.greaterThan', 0);
        cy.get('[data-cy="accountMenu"]').eq(0).should('have.text', 'Account Settings Password Sign out');
    });

    it('should navigate to Settings page', () => {
        cy.contains('Settings').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}account/settings`);
    });

    it('should display Swagger page correctly', () => {
        cy.contains('span', 'Swagger').click();
        cy.url().should('eq', `${Cypress.config().baseUrl}/docs/docs`);
    });
    });


