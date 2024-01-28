import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import  LoginPage from './loginPage';
import HomePage from  '../home/homePage';

//#Login capcha

Given("Que o usuário está na página de login", () => {
  LoginPage.Url();
});
When('ele informar as credências inválidas e o captcha {string},{string},{string}',(username, password, captcha) => {
  LoginPage.LoginCaptchaInvalid(username,password,captcha);  
});
Then('e exibido um alerta do captcha {string}', (error_message) => {
 LoginPage.MsnAlertCaptcha(error_message);
});

//#Login invalido

Given("Que o usuário esta na página de login", () => {
  LoginPage.Url();
});
When('ele informar as credências inválidas e o captcha é valido {string},{string}',(username, password) => {
  LoginPage.LoginNOCaptcha(username,password); 
});
Then('é exibido um alerta do captcha {string}', (error_message) => {
   LoginPage.MsnCredential(error_message);
});

//#Comportamento tela de login
Given('Que o usuário esteja na tela de login', () => {
  LoginPage.Url();
});

When('e informe as credenciais e deixe a tela {string},{string}',(username, password) => {
 LoginPage.LoginNOCaptcha(username,password);
 LoginPage.BtnVoltar();
 HomePage.CompararUrl(); 
  cy.wait(3000);
 HomePage.AcessarLogin();
});
Then('a tela de login tem que apresentar o comportamento inicial', () => {
  LoginPage.behavior() ;
});

//#Login Válido
Given('Que o usuário esteja na página de login', () => {
  LoginPage.Url();
});

When('ele informar as credenciais válidas {string},{string}',(username, password) => {
LoginPage.LoginNOCaptcha(username,password);
cy.wait(3000);
HomePage.AceitarCookie();
});

Then('deve acessar o sistema', () => {
 HomePage.validaPagina();
});
