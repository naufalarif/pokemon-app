/* eslint-disable no-undef */
describe('Adventure page', () => {
  it('should be able to catch pokemon', () => {
    cy.visit('/');
    cy.get('[data-cy="menu-adventure"]').click();
    cy.get('[data-cy="pokeball"]').click();
      
    cy.wait(4000);
    cy.get('[data-cy="close-modal"]').click();

    cy.visit('/history');
    cy.url().should('include', '/history');
    cy.get('[data-cy="card-history"]');
  });
});