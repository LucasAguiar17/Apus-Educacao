import { should } from 'chai';

const questoesElement  = require('./questoesElements')
const avalicaoesElement  = require('../Avaliacoes/avaliacoesElements')
class QuestoesPage{

    static btnCadastar(){
        cy.wait(3000);
        cy.get(avalicaoesElement.ElEMENTS._btnCadatrarAvaliacao).click();
    }

    static formulafio(){
        cy.get(questoesElement.ElEMENTS._tituloCadastarQuestão).should('contain',questoesElement.ElEMENTS._cabecalhoQuestão);
        cy.url().should('eq',questoesElement.ElEMENTS._url);
    }

    static tipoQuestao(acao,tipoQuestao,titulo){
        switch (acao) {
        
            case '1':
                cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao);
                cy.get(questoesElement.ElEMENTS._txtTituloQuestao).should('have.value',titulo);
               this.BtnCadastrarQuestão();
              break;
            case '2':
                cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao);
                cy.get(questoesElement.ElEMENTS._txtTituloQuestao).should('have.value',titulo);
                this.BtnCadastrarQuestão();
              break;
            case '3':
                cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
                cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
                    this.BtnCadastrarQuestão();
                cy.wait(3000);
              break;
        }
    }

    static etapas(tipoQuestao,titulo,enunciado,etapas){
       
        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
        cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
        cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
        cy.get(questoesElement.ElEMENTS._comboEtapas).should('have.value',etapas);
        this.BtnCadastrarQuestão();
        cy.wait(3000);
    }

    static anosFaixaEtaria(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria){
       
        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
        cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
        cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
        cy.get(questoesElement.ElEMENTS._comboEtapas).select(etapas);
        cy.get(questoesElement.ElEMENTS._comboAnosFaixas).select(anosFaixaEtaria);
        this.BtnCadastrarQuestão();
        cy.wait(3000);
    }
                      
    static experiencia(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia){
        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
        cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
        cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
        cy.get(questoesElement.ElEMENTS._comboEtapas).select(etapas);
        cy.get(questoesElement.ElEMENTS._comboAnosFaixas).select(anosFaixaEtaria)
        cy.get(questoesElement.ElEMENTS._comboExperiencia).select(campoExperiencia);
        this.BtnCadastrarQuestão();
        cy.wait(3000);
       
    }

    static selecionarHabilidade(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia){
        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
        cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
        cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
        cy.get(questoesElement.ElEMENTS._comboEtapas).select(etapas);
        cy.get(questoesElement.ElEMENTS._comboAnosFaixas).select(anosFaixaEtaria)
        cy.get(questoesElement.ElEMENTS._comboExperiencia).select(campoExperiencia);
        this.BtnCadastrarQuestão();
        cy.wait(3000);
    }

    static validarBotaoHabilidade(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia){
        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
        cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
        cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
        cy.get(questoesElement.ElEMENTS._comboEtapas).select(etapas);
        cy.get(questoesElement.ElEMENTS._comboAnosFaixas).select(anosFaixaEtaria)
        cy.get(questoesElement.ElEMENTS._comboExperiencia).select(campoExperiencia);
        cy.get(questoesElement.ElEMENTS._btn_Habilidade).click();/// do botao adicionar habilidade
        cy.wait(3000);
    }

    static validarAlternativa(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia, habilidade){

        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
                cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
                cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
                cy.get(questoesElement.ElEMENTS._comboEtapas).select(etapas);
                cy.get(questoesElement.ElEMENTS._comboAnosFaixas).select(anosFaixaEtaria)
                cy.get(questoesElement.ElEMENTS._comboExperiencia).select(campoExperiencia);
                cy.get(questoesElement.ElEMENTS._comboHabilidadePai).first().click(); //primeiroselectHabilidadeopcao
                cy.contains(questoesElement.ElEMENTS._comboHabilidadeFilho, habilidade).click(); // selectHabilidadeopcao
                cy.get(questoesElement.ElEMENTS._btn_Habilidade).click();/// do botao adicionar habilidade       
                this.BtnCadastrarQuestão();
                cy.wait(3000); 
    }

    static adicionarUmaAlternativa(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia, habilidade,alternativas){
        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
        cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
        cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
        cy.get(questoesElement.ElEMENTS._comboEtapas).select(etapas);
        cy.get(questoesElement.ElEMENTS._comboAnosFaixas).select(anosFaixaEtaria)
        cy.get(questoesElement.ElEMENTS._comboExperiencia).select(campoExperiencia);
        cy.get(questoesElement.ElEMENTS._comboHabilidadePai).first().click();
        cy.contains(questoesElement.ElEMENTS._comboHabilidadeFilho, habilidade).click();
        cy.get(questoesElement.ElEMENTS._btn_Habilidade).click();/// do botao adicionar habilidade
        cy.get(questoesElement.ElEMENTS._btnAlternativa).click() //btnalternativas
        cy.get(questoesElement.ElEMENTS._txtAreaAlternativa1).type(alternativas);
        cy.get(questoesElement.ElEMENTS._radioAlternativa1).click();
        this.BtnCadastrarQuestão();
        cy.wait(3000);

    }

    static cadastroComSucesso(tipoQuestao,titulo,enunciado,etapas,anosFaixaEtaria,campoExperiencia, habilidade,alternativas,alternativas2){
        cy.get(questoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao); 
        cy.get(questoesElement.ElEMENTS._txtTituloQuestao).type(titulo);
        cy.get(questoesElement.ElEMENTS._txtAnunciado).type(enunciado);
        cy.get(questoesElement.ElEMENTS._comboEtapas).select(etapas);
        cy.get(questoesElement.ElEMENTS._comboAnosFaixas).select(anosFaixaEtaria)
        cy.get(questoesElement.ElEMENTS._comboExperiencia).select(campoExperiencia);
        cy.get(questoesElement.ElEMENTS._comboHabilidadePai).first().click();
        cy.contains(questoesElement.ElEMENTS._comboHabilidadeFilho, habilidade).click();
        cy.get(questoesElement.ElEMENTS._btn_Habilidade).click();/// do botao adicionar habilidade
        cy.get(questoesElement.ElEMENTS._btnAlternativa).click() //btnalternativas
        cy.get(questoesElement.ElEMENTS._txtAreaAlternativa1).type(alternativas);
        cy.get(questoesElement.ElEMENTS._radioAlternativa1).click();
        cy.get(questoesElement.ElEMENTS._btnAlternativa).click() //btnalternativas
        cy.get(questoesElement.ElEMENTS._txtAreaAlternativa2).type(alternativas2);
        this.BtnCadastrarQuestão();
        cy.wait(3000);
    }
    
    static  BtnCadastrarQuestão(){
        cy.get(questoesElement.ElEMENTS._btnCadastrarQuestao).click();
    }

    static AlertaMsnError(msnError){
        cy.get(questoesElement.ElEMENTS._alertaMsnError).should('contain',msnError);
        cy.get(questoesElement.ElEMENTS._btnConfirmaAlerta).click();
    }

    static ValidaCamposVazios(element,titulo){
        cy.get(element).should('have.value',titulo);
    }
     static PesquisaQuestao(tipoQuestao,titulo){
      //titulofitro  da tela de pesquisa  
      //avalicaoesElement
      cy.get(avalicaoesElement.ElEMENTS._cabecalho).should('contain',avalicaoesElement.ElEMENTS._textCabecalho)
      cy.get(avalicaoesElement.ElEMENTS._comboTipoQuestao).select(tipoQuestao,titulo);
      cy.get(avalicaoesElement.ElEMENTS._conteudoQuestao).should('contain',titulo);

      
     }

     static LogOff(){
        cy.get(avalicaoesElement.ElEMENTS._avatar).click(); // avatar menu
        cy.get(avalicaoesElement.ElEMENTS._btnSair).click() ; //sair 
        cy.get(avalicaoesElement.ElEMENTS._confirmaModalSair).click(); // sair poup pu
     }

}

export default QuestoesPage