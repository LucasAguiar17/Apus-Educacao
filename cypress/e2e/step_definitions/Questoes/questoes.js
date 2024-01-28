import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

import  QuestoesPage from './questoesPage';
import LoginPage  from '../login/loginPage';
import  AvaliacoesPage from '../Avaliacoes/avaliacoesPage';
import HomePage from '../home/homePage';

/*
Given("que o usuário está na página de questões", () => {
    LoginPage.Url();
    LoginPage.LoginNOCaptcha(91358566020,123456789);
    cy.wait(3000);
    AvaliacoesPage.AcessarAvaliacoes();
    AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
  });
  When("ele clicar no botão cadastrar",() => {
    QuestoesPage.btnCadastar();
   
  });
  Then("é exibido o formulário", () => {
    QuestoesPage.formulafio();
  });
*/
 //Tipo Questão

 Given("que o usuário está na página de cadastrar questões - Tipo questão e Titulo", () => {
    LoginPage.Url();
    LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
    cy.wait(3000);
    HomePage.AceitarCookie();
    AvaliacoesPage.AcessarAvaliacoes();
    AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
    QuestoesPage.btnCadastar();
  
});
    When("ele não informa o tipo de questão e o titulo clicar no botão cadastrar questões {string},{string},{string},{string}",(acao,tipoQuestao, titulo) => {
    QuestoesPage.tipoQuestao(acao,tipoQuestao,titulo);

});
    Then("é exibido mensagens de alerta -tipo questão e titulo {string}", (msnError) => {
        if( msnError !== ''){
        QuestoesPage.AlertaMsnError(msnError);
        }
});

//Etapas
    Given("que o usuário está na página de cadastrar questões - etapas", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
        
    });
        When("ele não informa a etapa da questão e clicar no botão cadastrar questões {string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas) => {
        QuestoesPage.etapas(tipoQuestao,titulo,enunciado,etapas);

    });
        Then("é exibido mensagens de alerta -etapas {string}", (msnError) => {
            if( msnError !== ''){
            QuestoesPage.AlertaMsnError(msnError);
            }
    });

    //Anos faixa etaria
    
    Given("que o usuário está na página de cadastrar questões - anos faixa etária", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
       
    });
        When("ele não informar anos faixa etária e clicar no botão cadastrar questões {string},{string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria) => {
       
            QuestoesPage.anosFaixaEtaria(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria);

    });
        Then("é exibido mensagens de alerta -etapas {string}", (msnError) => {
           
            QuestoesPage.AlertaMsnError(msnError);
           
    });
    //anos experiência

    Given("que o usuário está na página de cadastrar questões - experiência", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
      
    });
        When("ele não informar a experiência e clicar no botão cadastrar questões {string},{string},{string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia) => {
       
            QuestoesPage.experiencia(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia);

    });
        Then("é exibido mensagens de alerta -experiência {string}", (msnError) => {
          
            QuestoesPage.AlertaMsnError(msnError);
            
    });

    //hABILIDADE

    Given("que o usuário está na página de cadastrar questões - habilidade", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
       
    });
        When("ele não informar a habilidade BNCC e clicar no botão cadastrar questões {string},{string},{string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia) => {
       
            QuestoesPage.selecionarHabilidade(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia);

    });
        Then("é exibido mensagens de alerta -habilidade {string}", (msnError) => {
           
            QuestoesPage.AlertaMsnError(msnError);
           
    });
    
 // habilidade BNCC 
 
    Given("que o usuário está na página de cadastrar questões - habilidade BNCC", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
        
    });
        When("ele não informar a habilidade BNCC e clicar no botão adicionar habilidade {string},{string},{string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia) => {
       
            QuestoesPage.validarBotaoHabilidade(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia);

    });
        Then("é exibido mensagens de alerta -habilidade {string}", (msnError) => {
           
            QuestoesPage.AlertaMsnError(msnError); 
            
    }); 

     // alternativas
     
     Given("que o usuário está na página de cadastrar questões - alternativas", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
       
    });
        When("ele não informar as alternativas e clicar no botão cadastrar {string},{string},{string},{string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia,habilidade) => {
       
            QuestoesPage.validarAlternativa(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia,habilidade);

    });
        Then("é exibido mensagens de alerta -habilidade {string}", (msnError) => {
           
            QuestoesPage.AlertaMsnError(msnError);
           
    });
    
   //

    //adiciona uma alternatias
     // alternativas
      
     Given("que o usuário está na página de cadastrar questões - duas alternativas", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
       
    });
        When("ele não informar as duas alternativas e clicar no botão cadastrar {string},{string},{string},{string},{string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia,habilidade,alternativas) => {
       
            QuestoesPage.adicionarUmaAlternativa(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia,habilidade,alternativas);

    });
        Then("é exibido mensagens de alerta -habilidade {string}", (msnError) => {
           
            QuestoesPage.AlertaMsnError(msnError);
           
    });

     //cadstro efetuado comsucesso
     // alternativas
     Given("que o usuário está na página de cadastrar questões", () => {
        LoginPage.Url();
        LoginPage.LoginNOCaptcha(Cypress.env('USER'),Cypress.env('PASSWORD'));
        cy.wait(3000);
        HomePage.AceitarCookie();
        AvaliacoesPage.AcessarAvaliacoes();
        AvaliacoesPage.ValidaCompoenetesTelaAvaliacao();
        QuestoesPage.btnCadastar();
        
    });
        When("ele informma todos os dados para a questão do tipo objetiva e clicar no botão cadastrar {string},{string},{string},{string},{string},{string},{string},{string},{string}",(tipoQuestao, titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia,habilidade,alternativas,alternativas2) => {
       
            QuestoesPage.cadastroComSucesso(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia,habilidade,alternativas,alternativas2);

    });
        Then("a questão é cadastrada com sucesso {string},{string},{string}", (msnError,tipoQuestao,titulo) => {
           
            QuestoesPage.AlertaMsnError(msnError);
            QuestoesPage.PesquisaQuestao(tipoQuestao,titulo);
            QuestoesPage.LogOff();
      

            
    });




