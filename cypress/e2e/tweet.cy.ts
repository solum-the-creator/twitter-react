import { login, logout } from './helpers/auth-helpers';

describe('Tweet Creation Module e2e tests', () => {
  const testUserEmail = 'test@example.com';
  const testUserPassword = 'correctpassword';
  const generateTweetContent = () => `This is a test tweet ${Date.now()}`;

  const validateTweetForm = () => {
    cy.get('[data-testid="tweet-form"]').should('be.visible');
    cy.get('[data-testid="tweet-input"]')
      .should('have.attr', 'placeholder', "What's happening?!")
      .and('have.value', '');
    cy.get('[data-testid="tweet-submit-button"]').should('be.disabled');
  };

  const createTweet = (content: string) => {
    cy.get('[data-testid="tweet-input"]').type(content);
    cy.get('[data-testid="tweet-submit-button"]').click();
    cy.wait(2000);
  };

  const deleteTweet = (content: string) => {
    cy.contains(content).should('be.visible');
    cy.get('[data-testid="delete-tweet-button"]').click();
    cy.contains('Delete').click();
    cy.get('button').contains('Delete Tweet').click();
    cy.contains(content).should('not.exist');
  };

  before(() => {
    login(testUserEmail, testUserPassword);
  });

  after(() => {
    logout();
  });

  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });

  it('should display the tweet form and validate inputs', () => {
    validateTweetForm();
  });

  it('should create a text-only tweet and display it in the feed', () => {
    const tweetContent = generateTweetContent();

    createTweet(tweetContent);
    cy.contains(tweetContent).should('be.visible');

    deleteTweet(tweetContent);
  });
});
