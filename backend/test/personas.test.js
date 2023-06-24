import generador from "./generadores/personas.js"
import { expect } from "chai"

describe('Deberia crear una nueva persona aleatoria',() =>{

    it('Deberia crear una persona completa',()=>{

        const persona = generador.get()

        console.log(persona)

        expect(persona).to.include('nombre','apellido','pass','edad','email','celular','dni','direccion')

    })

})

