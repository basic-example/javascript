describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('displays two todo items by default', () => {
    cy.get('.todo-list li').should('have.length', 2);
  });
});
