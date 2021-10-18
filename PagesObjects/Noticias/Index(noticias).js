const el = require ("../Noticias/Elements(noticias)").Tesouro

class acessar{
    visitarpagina(){
        cy.visit(el.SITE) 
        cy.get(el.COOKIE).click()

    }
    EntrarMenuNoticia(){
        cy.get(el.MENUNOTICIA).click()
        cy.get(el.COOKIE2).click()

    }
    EntrarNoticia1(){
        cy.get(el.NOTICIA1).click({force: true})
        cy.get(el.BOTAOTODASNOT).click({force: true})
    
    }
    EntrarNoticia2(){
        cy.get(el.NOTICIA2).click({force: true})
        cy.get(el.BOTAOTODASNOT).click({force: true})

    }
    EntrarNoticia3(){
        cy.get(el.NOTICIA3).click({force: true})
        cy.get(el.BOTAOTODASNOT).click({force: true})

}
}

export default new acessar
