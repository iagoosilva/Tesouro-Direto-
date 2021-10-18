const el = require("../BarraDeBusca/Elements(barra)").Tesouro

class acessar{
visitarpagina(){
    cy.visit(el.SITE) 
    cy.get(el.COOKIE).click()

}

TestarNomeValido(){
    cy.get(el.MENU).click()
    cy.get(el.BARRA).type(el.NOMEVALIDO, '{enter}')
}

TestarCaracter(){
    cy.get(el.MENU).click()
    cy.get(el.BARRA).type(el.CARACTER)
    cy.get(el.LUPA).click()

}
TestarNumeros(){
    cy.get(el.MENU).click()
    cy.get(el.BARRA).type(el.NUMEROS)
    cy.get(el.LUPA).click()

}
}
export default new acessar










// /// <reference types="cypress" />
	
// describe('Validate Test', () =>{
//     it('Visitar o site',()=>{
//         cy.visit('https://www.tesourodireto.com.br/')
//         cy.get('#onetrust-accept-btn-handler').click()
    

// })
//     it('Testar barra de busca com nome válido',()=>{
//         cy.get('.td-menu-trigger').click()
//         cy.get('#query').type('investimentos, {enter}')

//     })

//     it('Testar barra com caracter',()=>{
//         cy.visit('https://www.tesourodireto.com.br/')
//         cy.get('#onetrust-accept-btn-handler').click()
        
//         cy.get('.td-menu-trigger').click()
//         cy.get('#query').type('@$#, {enter}')
       
//     })

//     it('Testar barra com números',()=>{
//         cy.visit('https://www.tesourodireto.com.br/')
//         cy.get('#onetrust-accept-btn-handler').click()
        
//         cy.get('.td-menu-trigger').click()
//         cy.get('#query').type('1234, {enter}')

// })
// })