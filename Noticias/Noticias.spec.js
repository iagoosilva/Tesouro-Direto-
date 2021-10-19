import acessar from "../Noticias/Index(noticias)"
const el = require("../Noticias/Elements(noticias)").Tesouro

describe('Validate Test', () =>{
    beforeEach(() => {
        acessar.visitarpagina()
        acessar.EntrarMenuNoticia()


 })

 it('Entrar Noticia 1',()=>{
    acessar.EntrarNoticia1()
     cy.get(el.TITULO).should('have.text','Novidade! Mudança na Taxa de Custódia dos títulos do Tesouro Direto!')
 })
 it('Entrar Noticia 2',()=>{
    acessar.EntrarNoticia2()
    cy.get(el.TITULO).should('have.text','Novidade! Liquidez diária no Tesouro Direto: dinheiro na conta no mesmo dia.')
})
it('Entrar Noticia 3',()=>{
   acessar.EntrarNoticia3()
    cy.get(el.TITULO).should('have.text','Comunicado aos Investidores do Tesouro Direto')
})
})