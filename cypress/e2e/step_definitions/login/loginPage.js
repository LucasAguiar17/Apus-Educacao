const loginElement  = require('./loginElements')
class LoginPage{

static pageLogin(){
cy.visit()
}
static Url(){
    cy.visit(loginElement.ElEMENTS._url);
}

static LoginCaptchaInvalid(username,password,captcha){
    debugger;
    if(username === ""){
        cy.get(loginElement.ElEMENTS._userName).should('have.value',username);
    }else{
        cy.get(loginElement.ElEMENTS._userName).type(username);
    }

    if(password === ""){
        cy.get(loginElement.ElEMENTS._password).should('have.value',password);
    }else{
        cy.get(loginElement.ElEMENTS._password).type(password);
    }

    if(captcha === ""){
        cy.get(loginElement.ElEMENTS._captcha).should('have.value',captcha);
    }else{
        cy.get(loginElement.ElEMENTS._captcha).type(captcha);
    }

    cy.get(loginElement.ElEMENTS._btnLogin).click();
}

static LoginNOCaptcha(username,password){
    if(username === ""){
        cy.get(loginElement.ElEMENTS._userName).should('have.value',username);
    }else{
        cy.get(loginElement.ElEMENTS._userName).type(username);
    }

    if(password === ""){
        cy.get(loginElement.ElEMENTS._password).should('have.value',password);
    }else{
        cy.get(loginElement.ElEMENTS._password).type(password);
    }
    cy.get(loginElement.ElEMENTS._CaptchaDiv).invoke('text').then((captchaText) => {
        // Digitar o texto obtido no campo #CaptchaInput
        cy.get(loginElement.ElEMENTS._captcha).type(captchaText.trim())
    });
    cy.get(loginElement.ElEMENTS._btnLogin).click();
}

static BtnVoltar(){
    cy.get(loginElement.ElEMENTS._chkboxLembrar).click()
    cy.get(loginElement.ElEMENTS._btn_voltar).click()
}

static behavior(){
  
  cy.get(loginElement.ElEMENTS._userName).should('have.value', '');
  cy.get(loginElement.ElEMENTS._password).should('have.value', '');
  cy.get(loginElement.ElEMENTS._chkboxLembrar).should('not.be.checked');
  cy.url().should('eq',loginElement.ElEMENTS._url);
}
static MsnAlertCaptcha(error_message)
{
    cy.on('window:confirm', cy.stub().as('confirmStub'));
    cy.on('window:alert', (mensagem) => {
      expect(mensagem).to.equal(error_message);
      cy.get(loginElement.ElEMENTS._btnConfirmAlert).click();
    });
}

static MsnCredential(error_message){
    cy.get(loginElement.ElEMENTS._errorMsnCredential).should('contain',error_message);
}

}
export default LoginPage

