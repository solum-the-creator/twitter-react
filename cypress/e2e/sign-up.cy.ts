/// <reference types="cypress" />

import { logout } from './helpers/auth-helpers';

describe('Sign Up Module e2e tests', () => {
  const testUserEmail = `testuser_${Date.now()}@example.com`;
  const testUserPassword = 'correctpassword';
  const testUserName = 'Test User';
  const testUserPhone = '375291234567';
  const testUserDay = '15';
  const testUserMonth = '6';
  const testUserYear = '1990';

  const visitSignUpPage = () => {
    cy.contains('Sign up with email').click();
    cy.url().should('include', '/sign-up');
  };

  const checkSignUpFormVisibility = () => {
    cy.contains('Create an account').should('be.visible');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="phone"]').should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
  };

  const fillSignUpForm = (
    name: string,
    phone: string,
    email: string,
    password: string,
    day: string,
    month: string,
    year: string,
  ) => {
    cy.get('input[type="text"]').clear().type(name);
    cy.get('input[type="phone"]').clear().type(phone);
    cy.get('input[type="email"]').clear().type(email);
    cy.get('input[type="password"]').clear().type(password);
    cy.get('select[name="month"]').select(month);
    cy.get('select[name="day"]').select(day);
    cy.get('select[name="year"]').select(year);
  };

  const submitSignUpForm = () => {
    cy.get('button[type="submit"]').click();
  };

  const validateErrorMessages = (messages: string[]) => {
    messages.forEach((message) => cy.contains(message).should('be.visible'));
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('should validate inputs and register user successfully', () => {
    visitSignUpPage();
    checkSignUpFormVisibility();

    submitSignUpForm();
    validateErrorMessages([
      'Name is required',
      'Phone is required',
      'Email is required',
      'Password must be at least 6 characters',
    ]);

    cy.get('input[type="email"]').type('invalid-email');
    cy.get('input[type="password"]').type('short');
    submitSignUpForm();
    validateErrorMessages(['Invalid email', 'Password must be at least 6 characters']);

    fillSignUpForm(
      testUserName,
      testUserPhone,
      testUserEmail,
      testUserPassword,
      testUserDay,
      testUserMonth,
      testUserYear,
    );
    submitSignUpForm();

    cy.url().should('include', '/home');
    cy.wait(2000);

    logout();
    cy.contains('Already have an account?').should('be.visible');
  });

  it('should show error on duplicate email registration', () => {
    visitSignUpPage();
    fillSignUpForm(
      testUserName,
      testUserPhone,
      testUserEmail,
      testUserPassword,
      testUserDay,
      testUserMonth,
      testUserYear,
    );
    submitSignUpForm();
    cy.contains('This email is already in use by another account.').should('be.visible');
  });
});
