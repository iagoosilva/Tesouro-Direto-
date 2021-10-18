import acessar from "../BarraDeBusca/Index(barra)"
const el = require("../BarraDeBusca/Elements(barra)").Tesouro

it('Visitar o site',()=>{
    acessar.visitarpagina()

})

it('Testar barra de busca com nome válido',()=>{
    acessar.TestarNomeValido()
   
})

it('Testar Caracter',()=>{
    acessar.visitarpagina()
    acessar.TestarCaracter()

})
it('Testar Numero',()=>{
    acessar.visitarpagina()
    acessar.TestarNumeros()

})

