import { faker } from '@faker-js/faker';
import { loginPage } from '../../pages/loginpage';
const loginPageElements = require('../../fixtures/pages/loginSelectors.json')

describe("Santa login - UI", ()=>{
    it("User cannot login", ()=>{

        let logPage = new loginPage();
        let oldPassword = "Test1234";
        let newPassword = faker.internet.password(8);
        cy.log(newPassword);

        cy.visit("https://santa-secret.ru/");
        cy.contains("Вход и регистрация").click({force:true});
        logPage.login("yuliyabanko@gmail.com",oldPassword);
        cy.contains("Коробки").should("exist");
        cy.changePassword("Yuliya", newPassword);

        cy.contains("Выйти из профиля").click();
        cy.visit("https://santa-secret.ru/");
        cy.contains("Вход и регистрация").click({force:true});
        cy.get(loginPageElements.loginField).type("yuliyabanko@gmail.com");
        cy.get(loginPageElements.passwordField).type(oldPassword);
        cy.get(loginPageElements.loginButton).click();
        
        // cy.contains("Неверное имя пользователя или пароль").should("exist");

        cy.get(":nth-child(4) > .frm").clear().type(newPassword);
        cy.contains("Войти").click();
        cy.changePassword("Yuliya", oldPassword);
    });
})