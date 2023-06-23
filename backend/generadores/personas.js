import { expect } from 'chai'
import generador from './generador/persona.js'

describe('*** Test generador de producto ***', () => {
    
    it('el producto debería poseer los campos nombre,apellido,edad, mail, celular,dni,direccion', () => {
        const prod = generador.get()
        //console.log(prod)

        expect(prod).to.include.keys('nombre','apellido','edad', 'mail', 'celular','dni','direccion')
    })

    it('debería generar producto con datos aleatorios', () => {
        const prod1 = generador.get()
    })
})