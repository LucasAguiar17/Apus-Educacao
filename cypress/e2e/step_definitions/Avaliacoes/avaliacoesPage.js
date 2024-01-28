const mensagensElement  = require('./avaliacoesElements')
class AvaliacoesPage{

static AcessarAvaliacoes(){

    cy.get(mensagensElement.ElEMENTS._btnModulo).click();
    cy.get(mensagensElement.ElEMENTS._dropdownAvaliacoes).click();
}

static ValidaCompoenetesTelaAvaliacao(){

    cy.get(mensagensElement.ElEMENTS._menulabel).should('contain',mensagensElement.ElEMENTS._nomeMenuEsquerdo);
    cy.get(mensagensElement.ElEMENTS._cardBoasVindas).should('contain',mensagensElement.ElEMENTS._msnPaginaBoasvindas)
    cy.get(mensagensElement.ElEMENTS._btnQuestoes).should('contain',mensagensElement.ElEMENTS._lblQuestoes);
    cy.get(mensagensElement.ElEMENTS._btnQuestoes).click(); //falta esse é o _btnQuestoes
}
}



export default AvaliacoesPage