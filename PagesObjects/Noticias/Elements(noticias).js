export const Tesouro ={
    SITE: 'https://www.tesourodireto.com.br/',
    COOKIE: '#onetrust-accept-btn-handler',
    MENUNOTICIA: ':nth-child(6) > .td-footer-nav__submenu > :nth-child(1) > .td-footer-nav__submenu__item',
    COOKIE2: '#onetrust-accept-btn-handler',
    NOTICIA1: ':nth-child(2) > .td-noticias-item__title',
    NOTICIA2: ':nth-child(3) > .td-noticias-item__title',
    NOTICIA3: ':nth-child(5) > .td-noticias-item__title',
    BOTAOTODASNOT: '.td-breadcrumb__wrapper > [href="/noticias.htm?category=8A82E8106BF78318016C0067A5E135E2"]'


}
    

//     /// <reference types="cypress" />
	
// describe('Validate Test', () =>{
//     it('Visitar o site',()=>{
//         cy.visit('https://www.tesourodireto.com.br/')
//         cy.get('#onetrust-accept-btn-handler').click()

//     })

//     it('Entrar em notícias',()=>{
//         cy.get(':nth-child(6) > .td-footer-nav__submenu > :nth-child(1) > .td-footer-nav__submenu__item').click()
//         cy.get('#onetrust-accept-btn-handler').click()
//         cy.get(':nth-child(2) > .td-noticias-item__title').click({force: true})
//         cy.get('.td-breadcrumb__wrapper > [href="/noticias.htm?category=8A82E8106BF78318016C0067A5E135E2"]').click({force: true})
//         cy.get(':nth-child(3) > .td-noticias-item__title').click({force: true})
//         cy.get('.td-breadcrumb__wrapper > [href="/noticias.htm?category=8A82E8106BF78318016C0067A5E135E2"]').click({force: true})
//         cy.get(':nth-child(5) > .td-noticias-item__title').click({force: true})
//         cy.get('.td-breadcrumb__wrapper > [href="/noticias.htm?category=8A82E8106BF78318016C0067A5E135E2"]').click({force: true})



//     })
// })