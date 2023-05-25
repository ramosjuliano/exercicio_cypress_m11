/// <reference types="cypress" />

describe('Página de Produto', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve Selecionar um Produto da Lista', () => {

    cy.get('.product-block').first().click()

  });

  it.only('Acrescentar um item ao carrinho', () => {
    let quantity = 2

    cy.get('.product-block').first().click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.plus').click()
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantity)
    cy.get('.woocommerce-message').should('contain', quantity)
  });

});