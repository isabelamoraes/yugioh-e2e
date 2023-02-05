describe('Yu-gi-oh! flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/')
  })

  it('should have 8 cards available in pack', () => {
    cy.get('.card').should('have.length', 8);
  })

  it('should have 4 cards available in monster pack and 4 cards available in spell and trap pack', () => {
    cy.get('.monster-pack > .card').should('have.length', 4);
    cy.get('.spell-trap-pack > .card').should('have.length', 4);
  })

  it('should reveal the card when on click some card', () => {
    const card = Math.floor(Math.random() * 8)
    cy.get('.card').eq(card).click((res) => expect(res).toHaveProperty('.visible'));
  })

  const cards = require('../../fixtures/cards.json');
  it('should request a new pack when all cards be visible', () => {
    cards.forEach(card => {
      cy.get('.card').eq(card).click();
    })
    cy.request({
      method: 'GET',
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php/'
    })
    cy.get('.card').should('have.length', 8);
  })
})