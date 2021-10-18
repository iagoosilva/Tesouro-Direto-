import acessar from "../Noticias/Index(noticias)"
const el = require("../Noticias/Index(noticias)").Tesouro

it('Visitar o site',()=>{
    acessar.visitarpagina()

})

it('Acessar Menu noticia',()=>{
    acessar.EntrarMenuNoticia()
   

})

it('Entrar na noticia 1',()=>{
    acessar.EntrarNoticia1()
   
})

it('Entrar na noticia 2',()=>{
    acessar.EntrarNoticia2

})
it('Entrar na noticia 3',()=>{
    acessar.EntrarNoticia3

})