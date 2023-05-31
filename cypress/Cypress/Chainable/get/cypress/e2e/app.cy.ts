describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('header have.length', () => {
    cy.get('header').should('have.length', 1);
  });

  it('header.input have.length', () => {
    cy.get('header').get('input').should('have.length', 4);
  });

  it('header.input.header have.length', () => {
    cy.get('header').get('input').get('header').should('have.length', 1);
  });

  it('input have.length', () => {
    cy.get('input').should('have.length', 4);
  });

  it('input.header have.length', () => {
    cy.get('input').get('header').should('have.length', 1);
  });

  it('input.header.input have.length', () => {
    cy.get('input').get('header').get('input').should('have.length', 4);
  });
});
