import { expect } from 'chai'
import generador from './generador/producto.js'

describe('*** Test generador de producto ***', () => {
    
    it('el producto debería poseer los campos nombre, precio, categoria,marca,modelo,stock, fecha de expiracion', () => {
        const prod = generador.get()
        //console.log(prod)

        expect(prod).to.include.keys('nombre','precio','stock','categoria', 'fechaExpiracion','marca','modelo')
    })

    it('debería generar producto con datos aleatorios', () => {
        const prod1 = generador.get()
    })
})