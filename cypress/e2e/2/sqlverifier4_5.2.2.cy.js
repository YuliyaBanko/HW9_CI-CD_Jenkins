describe('Header is working', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.get('input[name="username"]').type(Cypress.env('username'));  
        cy.get('input[name="password"]').type(Cypress.env('password')); 
        cy.get('button[type="submit"]').click();
    });

    it('Should display brand title', () => {
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

    it('Should click English button', ()=> {
       cy.get("#header-tabs > li:nth-child(4) > a").click();
       cy.contains("English").click();
       cy.get(":nth-child(1) > .d-flex").should('have.text', "Home");
    });

    it('Should click French button', ()=> {
        cy.get("#header-tabs > li:nth-child(4) > a").click();
        cy.contains("Fran").click();
        cy.get(":nth-child(1) > .d-flex").should('have.text', "Accueil");
        });
    it('Should click Русский button', ()=> {
            cy.get("#header-tabs > li:nth-child(4) > a").click();
            cy.contains("Русский").click();
            cy.get(":nth-child(1) > .d-flex").should('have.text', "Главная");
            });

    it('Should click Українська button', ()=> {
            cy.get("#header-tabs > li:nth-child(4) > a").click();
            cy.contains("Українська").click();
            cy.get(":nth-child(1) > .d-flex").should('have.text', "Головна");
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