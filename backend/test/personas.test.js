import generador from "./generadores/personas.js"
import { expect } from "chai"
import Router from "../router/personas.js"



describe('Deberia crear una nueva persona aleatoria',() =>{

    it('Deberia crear una persona completa',()=>{

        const persona = generador.get()

        console.log(persona)

        expect(persona).to.include.keys('nombre','apellido','pass','edad','email','celular','dni','direccion')

        
    })

})

