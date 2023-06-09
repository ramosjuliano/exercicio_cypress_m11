///<reference types="cypress" />
const perfil = require('../../fixtures/perfil.json');

beforeEach(() => {
  cy.visit('minha-conta/')
});

afterEach(() => {
  cy.screenshot()
});

context('Funcionalidade Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('usuario_incorreto@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. ')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('senhaincorreta')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para ')
  })

  it('Deve fazer login com sucesso - Usando banco de Dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
  });

  it('Deve Fazer Login com Sucesso - Usando Fixture', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, {log: false}) // Não deixa visível nos steps do teste
      cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })
  });

})
