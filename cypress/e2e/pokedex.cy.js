/* eslint-disable no-undef */
describe('pokedex page', () => {
  it('should be able to open detail pokemon', () => {
    cy.visit('/');

    cy.get('[data-cy="menu-pokedex"]').click();

    cy.url().should('include', '/pokedex');

    cy.get('[data-cy="pokemon-bulbasaur"]').click();

    cy.url().should('include', '/pokemon/bulbasaur');

    cy.get('[data-cy="name"]').contains('bulbasaur');
    cy.get('[data-cy="effect-list"]');
    cy.get('[data-cy="information"]').contains('Stats');
    cy.get('[data-cy="information"]').contains('Evolution');
    cy.get('[data-cy="information"]').contains('Form');
    cy.get('[data-cy="information"]').contains('Appereance');
  });
});