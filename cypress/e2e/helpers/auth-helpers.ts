/// <reference types="cypress" />

export const login = (email: string, password: string) => {
  cy.visit('/');
  cy.contains('Already have an account?').should('be.visible');
  cy.contains('Log in').click();
  cy.url().should('include', '/login');

  cy.get('input[type="email"]').clear().type(email);
  cy.get('input[type="password"]').clear().type(password);
  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/home');
  cy.wait(2000);
};

export const logout = () => {
  cy.get(`[data-testid="logout-button"]`).click();
  cy.contains('Confirm').click();
  cy.url().should('eq', `${Cypress.config().baseUrl}/`);
};
