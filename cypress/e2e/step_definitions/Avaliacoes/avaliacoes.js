import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

import  AvaliacoesPage from './avaliacoesPage'
import LoginPage  from '../login/loginPage';
import homePage from '../home/homePage';


Given("que o usuário está na página de Mensagens", () => {
    LoginPage.Url();
    LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
    cy.wait(3000);
    homePage.AceitarCookie();
  });
  When('ele clicar no menu módulos e selecionar avaliações',() => {
    AvaliacoesPage.AcessarAvaliacoes();
   
  });
  Then('é exibida a tela de avaliações', () => {
    AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
   
  });


