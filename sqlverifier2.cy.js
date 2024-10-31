describe('Header is working', () => {
    before(() => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('yuliya'); 
      cy.get('input[name="password"]').type('Zuzu'); 
      cy.get('button[type="submit"]').click();
    });
  
    it('Task page', () => {
      cy.contains('[data-cy="entities"]').click();
      cy.get('header a[href="/task"]').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/task?page=1&sort=id,asc`);
    });
  
    it('User Task page', () => {
      cy.get('[data-cy="submit"]').click();
      cy.get('header a[href="/user-task"]').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/user-task`);
    });
  
    it('API', () => {
      cy.contains('Swagger').click();
      cy.get('header a[href="/docs/docs"]').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/docs/docs`);
    });
  
    it('Account menu', () => {
      cy.get('[data-cy="accountMenu"]').click();
      cy.get('[data-cy="accountMenu"]').should('be.visible');
  
      // Проверка, что меню содержит элементы
      cy.get('[data-cy="accountMenu"]')
        .should('have.length.greaterThan', 0);
  
      // Проверяем количество элементов в меню
      cy.get('[data-cy="accountMenu"] li').should('have.length', 1);
  
      // Проверяем текст первого элемента
      cy.get('[data-cy="accountMenu"] li').eq(0).should('have.text', 'Settings');
    });
  });
  