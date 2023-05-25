/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve Completar o Pré Cadastro com Sucesso', () => {
    let emailFaker = faker.internet.email()
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()


    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type('senhamuitocomplicada')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
  });

});