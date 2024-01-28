import { expect } from 'chai';

const mensagensElement  = require('./mensagensElements')
class MensagensPage{

static Menu(){
    cy.get(mensagensElement.ElEMENTS._btnMenuMensagem);
}

static ValidaComponetesTelaMensagens()
{
    cy.get(mensagensElement.ElEMENTS._btnMenuMensagem).click();
    cy.get(mensagensElement.ElEMENTS._cabecalho).should('contain', mensagensElement.ElEMENTS._cabecalhoMensages)
    cy.url().should('eq',mensagensElement.ElEMENTS._url);
}
static Pesquiar(){
this.Menu()
this.ValidaComponetesTelaMensagens()
    cy.get(mensagensElement.ElEMENTS._lupaSearch).click();
    cy.get(mensagensElement.ElEMENTS._cabechalhoModal).should('contain', mensagensElement.ElEMENTS._tituloModal)
}
static NaoInformaDados(){
    cy.get(mensagensElement.ElEMENTS._btnModal).click(); 
}
static MsnAlerta(){
    this.msnError();
    cy.get(mensagensElement.ElEMENTS._btn_alerta).click(); 
    cy.get(mensagensElement.ElEMENTS._btnFecharModal).click();
}

static InputModalContact(contato){
    cy.get(mensagensElement.ElEMENTS._inputTextContact).type(contato);
    cy.wait(3000);
    cy.get(mensagensElement.ElEMENTS._btnSearchContact).click();  
}
static ListaContatosModal(){
    cy.get(mensagensElement.ElEMENTS._listContatosModal).click(); 
    cy.get(mensagensElement.ElEMENTS._btnModal).click() ;
}


static SelecionarArquivo(){
    /*
    cy.fixture('Arquivo/semConteudo.pdf').then(fileContent => {
        cy.get('input[type="file"]').then(input => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent);
            const file = new File([blob], 'semConteudo.pdf', { type: 'application/pdf' });
            const dataTransfer = new DataTransfer();

            dataTransfer.items.add(file);
            input[0].files = dataTransfer.files;

            cy.wrap(input).trigger('change', { force: true });
        });
    });
  */
  
   
    //cy.get('#document-dropzone').click() // clicarpARAaBRIRdiREITORIOPARA SELECIONAR AQIVO
}

static ExisteConteudoMsn(){
    cy.get(mensagensElement.ElEMENTS._conteudoMsn).should('not.be.empty'); 
}
static EnviarArquivo(){
    cy.get('#btn-send-file > .fa').click(); //btnAbrirModalEnviarArquivo
    cy.get('#btn-confirm-send-file').click() //btnEviarArquivomoDEL
}

static msnError(msnError){
    cy.get(mensagensElement.ElEMENTS._modal).should('contain', msnError);
}

}

export default MensagensPage