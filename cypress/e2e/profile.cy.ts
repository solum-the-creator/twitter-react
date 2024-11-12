import { login, logout } from './helpers/auth-helpers';

describe('Profile Module e2e tests', () => {
  const testUserEmail = 'test@example.com';
  const testUserPassword = 'correctpassword';
  const testUserName = 'Test Name';
  const testUserBio = 'This is a test bio.';
  const userId = 'EEZRaLLQWlT7Z0Q09q4Jy2f1RMS2';

  const navigateToProfilePage = (userId: string) => {
    cy.contains('Profile').should('be.visible').click();
    cy.url().should('include', `/profile/${userId}`);
    cy.wait(2000);
  };

  const validateProfileData = (name: string, email: string, bio: string) => {
    cy.get('[data-testid="profile-name"]').should('contain.text', name);
    cy.get('[data-testid="profile-email"]').should('contain.text', email);
    cy.get('[data-testid="profile-bio"]').should('contain.text', bio);
    cy.get('button').should('contain.text', 'Edit profile');
  };

  const openEditProfileModal = () => {
    cy.get('button').contains('Edit profile').click();
    cy.get('[data-testid="edit-profile-form"]');
  };

  const fillEditProfileForm = (name: string, bio: string, telegram?: string) => {
    cy.get('[data-testid="input-name"]').clear().type(name);
    cy.get('[data-testid="input-bio"]').clear().type(bio);
    cy.get('[data-testid="input-telegram"]').clear();

    if (telegram) {
      cy.get('[data-testid="input-telegram"]').type(telegram);
    }
  };

  const submitEditProfileForm = () => {
    cy.get('[data-testid="submit-button"]').click();
  };

  before(() => {
    login(testUserEmail, testUserPassword);
  });

  after(() => {
    logout();
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to profile page and display user data', () => {
    navigateToProfilePage(userId);
    validateProfileData(testUserName, testUserEmail, testUserBio);
  });

  it('should open edit profile modal, validate input, and submit changes', () => {
    cy.visit(`/profile/${userId}`);
    cy.wait(2000);

    openEditProfileModal();

    cy.get('[data-testid="input-name"]').clear();
    submitEditProfileForm();
    cy.contains('Name is required').should('be.visible');

    fillEditProfileForm('Updated Name', 'Updated Bio', 'https://t.me/updateduser');
    submitEditProfileForm();

    validateProfileData('Updated Name', testUserEmail, 'Updated Bio');
    cy.get('[data-testid="profile-telegram"]').should('contain.text', 'https://t.me/updateduser');

    openEditProfileModal();
    fillEditProfileForm(testUserName, testUserBio, '');
    submitEditProfileForm();
  });
});
