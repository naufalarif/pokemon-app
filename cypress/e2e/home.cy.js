/* eslint-disable no-undef */
describe('home spec', () => {
  it('should be able to open adventure page', () => {
    cy.visit('/');

    cy.get('[data-cy="link-adventure"]').click();

    cy.url().should('include', '/adventure');
  });
});