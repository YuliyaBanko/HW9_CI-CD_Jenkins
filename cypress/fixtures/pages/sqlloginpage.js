export class LoginPageSQL {
    elements = {
        accountMenu: () => cy.get('[data-cy="accountMenu"] > .d-flex > span'),
        loginMenu: () => cy.get('[data-cy="login"]'),
        userNameField: () => cy.get('[data-cy="username"]'),
        passwordField: ()=> cy.get('[data-cy="password"]'),
        signInButton: ()=> cy.get('[data-cy="submit"] > span'),
        entityMenu: () => cy.get('[data-cy="entity"] > .d-flex > span'),
        logOutButton: ()=> cy.get('[data-cy="logout"]'),
    };

login(username, password) {
    this.elements.accountMenu().click();
    this.elements.loginMenu().click();
    this.elements.userNameField().type(username);
    this.elements.passwordField().type(password);
    this.elements.signInButton().click(); 
}

}   