describe('VerifierPageLoad', () => {
    it('should load the page', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc'); 
      cy.get('.brand-title')
        .should('be.visible'); 
    });
  });
  