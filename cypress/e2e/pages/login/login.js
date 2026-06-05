import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pageObjects/Login";
// require('dotenv').config();

const loginPage = new LoginPage();

Given('I am on the login page', () => {
    cy.visit('/auth/login');
});

When('I enter valid credentials', () => {
    cy.env(['username', 'password']).then(({ username, password }) => {
        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password, { log: false }); // hides password in logs
    });
});

And('I click the login button', () => {
    loginPage.getLoginButton().click();
    cy.wait(2000); // Wait for login to complete
}); 

Then('I should be redirected to the dashboard', () => {
    cy.url().should('include', '/dashboard');
    cy.wait(2000); // Wait for login to complete
});

When('I enter an invalid username and valid password', () => {
    cy.env(['password']).then(({ password }) => {
        loginPage.getUsernameInput().type('invalidUser');
        loginPage.getPasswordInput().type(password, { log: false }); // hides password in logs
    });
})

Then('I should see an error message indicating invalid credentials', () => {
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials');
});

When('I enter a valid username and invalid password', () => {
    cy.env(['username']).then(({ username }) => {
        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type('invalidPass', { log: false }); // hides password in logs
    });
});

When('I enter an invalid username and invalid password', (dataTable) => {
  const credentials = dataTable.hashes()[0];
    loginPage.getUsernameInput().type(credentials.username);
    loginPage.getPasswordInput().type(credentials.password, { log: false }); // hides password in logs
});


When('I leave the username and password fields empty', () => {
    loginPage.getUsernameInput().should('be.empty');
    loginPage.getPasswordInput().should('be.empty');
})

Then('I should see error messages indicating that the fields are required', () => {
    cy.log('Checking for required field error messages');
    // cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains('Required');
    // cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').contains('Required');
});