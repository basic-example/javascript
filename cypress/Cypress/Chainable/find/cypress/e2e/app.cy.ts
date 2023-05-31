describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('h1 have.length', () => {
    cy.get('h1').should('have.length', 1);
  });

  it('h1 have.length', () => {
    cy.get('.todo-list').find('> li').get('h1').should('have.length', 1);
  });

  it('.todo-list > li have.length', () => {
    cy.get('.todo-list').find('> li').should('have.length', 2);
  });

  it('.todo-list label have.length', () => {
    cy.get('.todo-list').find('label').should('have.length', 2);
  });
});
