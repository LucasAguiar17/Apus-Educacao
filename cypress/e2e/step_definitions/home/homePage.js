const homeElement  = require('./homeElements')
class HomePage{

    static CompararUrl(){
        cy.url().should('eq', homeElement.ElEMENTS._url);
    }

    static AcessarLogin(){
        cy.get(homeElement.ElEMENTS._btnEntrar).click();
    }

    static validaPagina(){
        cy.get(homeElement.ElEMENTS._btnModulo).should('contain',homeElement.ElEMENTS._lblButtonModulo);
    }
    static AceitarCookie(){
         cy.get(homeElement.ElEMENTS._btnAceitarCookies).click(); 
    }

}

export default HomePage