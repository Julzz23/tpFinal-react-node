import generador from "./generadores/personas.js"
import { expect } from "chai"
import Router from "../router/personas.js"



describe('Deberia encontrar persona',() =>{

    it('Deberia crear una persona completa',()=>{

        const persona = generador.get()

        console.log(persona)
        Router.

        expect(persona).to.include.keys('nombre','apellido','pass','edad','email','celular','dni','direccion')

        
    })

})
