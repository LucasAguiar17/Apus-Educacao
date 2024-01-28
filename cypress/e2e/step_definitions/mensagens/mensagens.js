import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

import  MensagemPage from './mensagensPage'
import LoginPage  from '../login/loginPage';
import homePage from '../home/homePage';

//# Exibir página mensagens
Given("que o usuário está logado", () => {
    LoginPage.Url();
    LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
    cy.wait(5000);
    homePage.AceitarCookie()
  });
  When('ele clicar no menu Mensagens',() => {
     MensagemPage.Menu();
  });
  Then('é exibida a tela de mensagens', () => {
   MensagemPage.ValidaComponetesTelaMensagens();
  });

//# Validar Model Pesquisa
  Given("que o usuário clique na pesquisa", () => {
    LoginPage.Url();
    LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
    cy.wait(3000);
    homePage.AceitarCookie();
    MensagemPage.Pesquiar();
   
  });
  When('ele não informar nenhum usuário para pesquisa',() => {
     MensagemPage.NaoInformaDados();
  });
  Then('ele deve receber mensagens de alerta {string}',(msg_Error) => {
    MensagemPage.msnError(msg_Error); 
  });

    //#Validar últimas interaçoes de um contato que existe  
  Given("que na consulta de contatos", () => {
    LoginPage.Url();
    LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
    cy.wait(3000);
    homePage.AceitarCookie();
    MensagemPage.Pesquiar();
    
  });
  When('o contado não existe {string}',(contato) => {
    MensagemPage.InputModalContact(contato);
    MensagemPage.NaoInformaDados()
  });
  Then('não é exibido nenhum contato {string}', (msg_Error) => {
    MensagemPage.msnError(msg_Error);
  });

  //#Validar últimas interaçoes de um contato que existe 
  Given("que na consulta de contatos", () => {
    LoginPage.Url();
    LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
    cy.wait(3000);
    homePage.AceitarCookie();
    MensagemPage.Pesquiar();
    
  });
  When('o contado for selecionado {string}',(contato) => {
    MensagemPage.InputModalContact(contato);
    MensagemPage.ListaContatosModal();
  });
  Then('é exibida as útimas interações contato', () => {
    MensagemPage.ExisteConteudoMsn();
  });

//# Não enviar arquivo para o contato 
Given("que na tela de mensagens", () => {
  LoginPage.Url();
  LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
  cy.wait(3000);
  homePage.AceitarCookie();
  MensagemPage.Pesquiar();
});
When('não selecioar uma arquivo {string}',(contato) => {
  MensagemPage.InputModalContact(contato);
  MensagemPage.ListaContatosModal();

  cy.wait(3000);
  MensagemPage.EnviarArquivo();
});
Then('é exibiba uma mensagem de erro {string}',(msnError) => {
MensagemPage.msnError(msnError);
});


//# Enviar arquivo para o contato com suceso  
/*
Given("na tela de mensagens", () => {
  LoginPage.Url();
  LoginPage.LoginNOCaptcha(91358566020,123456789);
  cy.wait(3000);
  MensagemPage.Pesquiar()
});
When('seleciar o arquivo e envia o arquivo {string}',(contato) => {
  MensagemPage.InputModalContact(contato);
  MensagemPage.ListaContatosModal();
  MensagemPage.AceitarCookie();
  cy.wait(3000);
  MensagemPage.SelecionarArquivo();
  MensagemPage.EnviarArquivo();
});
Then('é visualizado o arquivo na mensagem',() => {

});

Scenario Outline: Enviar arquivo para o contato com sucesso   
Given na tela de mensagens
When seleciar o arquivo e envia o arquivo "<contato>"
Then é visualizado o arquivo na mensagem
Examples:  
| contato   |
| Anderson  | 
*/


