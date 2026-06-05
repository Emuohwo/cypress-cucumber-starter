// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
  cy.session('login session started', () => {
    cy.visit('/');


    cy.env(['username', 'password']).then(({ username, password }) => {


      cy.get('[name="username"]').type(username);
      cy.get('[name="password"]').type(password, { log: false }); // hides password in logs
      cy.get('button[type="submit"]').click();
      cy.wait(2000); // Wait for login to complete

      // Assert successful login
      cy.url().should('include', '/overview');
      cy.wait(2000); // Wait for login to complete
    });
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })