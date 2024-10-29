describe('Header is working', () => {
    before(() => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('yuliya'); 
      cy.get('input[name="password"]').type('Zuzu'); 
      cy.get('button[type="submit"]').click();
    });
  
    it('Home button should navigate to home page', () => {
        cy.get('.brand-title span').should('have.text', 'Sqlverifier');
        cy.contains('span', 'Home').should('be.visible');
      cy.contains('span', 'Entities').should('be.visible');
      cy.contains('span', 'English').should('be.visible');
      cy.contains('span', 'Swagger').should('be.visible');
      cy.contains('span', 'Account').should('be.visible');
      cy.contains('span', 'Account').click();
      cy.get('[data-cy="accountMenu"]')
      .should('have.length.greaterThan', 0);
    cy.get('[data-cy="accountMenu"]').should('have.length', 1);
    cy.get('[data-cy="accountMenu"]').eq(0).should('have.text', 'Account Settings Password Sign out');
      cy.url().should('eq', `${Cypress.config().baseUrl}?page=1&sort=id,asc`);
    });
  
  });
  
  
   