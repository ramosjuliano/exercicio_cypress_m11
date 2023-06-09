///<reference types="cypress" />
import EnderecoPage from "../../support/page-objects/endereco.page"
const perfil = require('../../fixtures/perfil.json');
const endereco = require('../../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.login(perfil.usuario, perfil.senha)
  });

  it('Deve fazer cadastro de faturamento com Sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento('Juliano', 'Ramos', 'PROCERGS', 'Brasil', 'Cristina Somariva', '2001', 'Viamão', 'Rio Grande do Sul' , '94475-520', '991210284', 'jpachecoramos@gmail.com')
    cy.get('.woocommerce-message').should('contain', 'alterado com sucesso')
  });

  it('Deve fazer cadastro de faturamento com Sucesso - Usando Arquivo de Dados', () => {
    EnderecoPage.editarEnderecoFaturamento(
      endereco[1].nome,
      endereco[1].sobrenome,
      endereco[1].empresa,
      endereco[1].pais,
      endereco[1].endereco,
      endereco[1].numero,
      endereco[1].cidade,
      endereco[1].estado,
      endereco[1].cep,
      endereco[1].telefone,
      endereco[1].email
      )
    cy.get('.woocommerce-message').should('contain', 'alterado com sucesso')
  });
});