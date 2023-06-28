import supertest from "supertest";
import { expect } from "chai";
import { describe } from "mocha";


const request = supertest('http://127.0.0.1:8080')


describe('Deberia traer un producto',() =>{

    it('busqueda de producto en base de datos', async ()=>{
            
        const producto = await ( request.get('/productos/123456789'))
        expect(producto.status)
        expect(producto).to.include.keys('nombre','categoria','marca','modelo','precio')
    })

})



