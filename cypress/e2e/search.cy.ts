import { login, logout } from './helpers/auth-helpers';

describe('User Search Module e2e tests', () => {
  const testUserEmail = 'test@example.com';
  const testUserPassword = 'correctpassword';
  const searchQuery = 'Test Name';
  const nonExistentQuery = 'NonExistentUser';

  const performSearch = (query: string) => {
    cy.get('[data-testid="search-input"]').clear().type(query);
    cy.wait(500);
  };

  const validateSearchInput = () => {
    cy.get('[data-testid="search-input"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search User')
      .and('have.value', '');
    cy.get('[data-testid="search-results"]').should('not.exist');
  };

  const validateSearchResults = (expectedResult: string) => {
    cy.get('[data-testid="search-results"]')
      .should('be.visible')
      .within(() => {
        cy.contains(expectedResult).should('be.visible');
      });
  };

  const validateNoResultsMessage = () => {
    cy.get('[data-testid="search-results"]').should('be.visible');
    cy.contains('No results found').should('be.visible');
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

  it('should display the search input and validate initial state', () => {
    validateSearchInput();
  });

  it('should display user results based on search query', () => {
    performSearch(searchQuery);
    validateSearchResults(searchQuery);
  });

  it('should display "No results found" for non-existent user query', () => {
    performSearch(nonExistentQuery);
    validateNoResultsMessage();
  });
});
