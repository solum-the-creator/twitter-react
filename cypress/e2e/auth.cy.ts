import { logout } from './helpers/auth-helpers';

describe('Auth Module e2e tests', () => {
  const testUserEmail = 'test@example.com';
  const testUserPassword = 'correctpassword';

  const visitLoginPage = () => {
    cy.contains('Already have an account?').should('be.visible');
    cy.contains('Log in').click();
    cy.url().should('include', '/login');
  };

  const checkLoginFormVisibility = () => {
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.contains('Log in to Twitter').should('be.visible');
  };

  const submitLoginForm = () => {
    cy.get('button[type="submit"]').click();
  };

  const validateErrorMessages = (messages: string[]) => {
    messages.forEach((message) => cy.contains(message).should('be.visible'));
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to login page, validate inputs, log in, and log out', () => {
    visitLoginPage();
    checkLoginFormVisibility();

    submitLoginForm();
    validateErrorMessages(['Email is required', 'Password must be at least 6 characters']);

    cy.get('input[type="email"]').type('invalid-email');
    cy.get('input[type="password"]').type('short');
    submitLoginForm();
    validateErrorMessages(['Invalid email', 'Password must be at least 6 characters']);

    cy.get('input[type="email"]').clear().type(testUserEmail);
    cy.get('input[type="password"]').clear().type(testUserPassword);
    submitLoginForm();
    cy.url().should('include', '/home');

    logout();
    cy.contains('Already have an account?').should('be.visible');
  });
});
