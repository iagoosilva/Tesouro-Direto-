export const Tesouro ={
SITE: 'https://www.tesourodireto.com.br/',
COOKIE: '#onetrust-accept-btn-handler',
MENU: '.td-menu-trigger',
NOMEVALIDO: 'investimentos',
CARACTER: '@$#',
NUMEROS: '1234',
BARRA: '#query',
LUPA: '.td-nav__search__submit',

}


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