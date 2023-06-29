import supertest from "supertest";
import { expect } from "chai";
import { describe } from "mocha";
import generador from './generadores/clientes.js'


var cliente 
const request = supertest('http://127.0.0.1:8080')

describe('prueba de ingreso de persona',()=>{

    it('tendria que poder crear correctamente la persona', async ()=>{

        cliente = generador.get()
        console.log('****** CLIENTE CREADO ************')
        console.log(cliente)

    })
       
    it('deberia poder ingresar correctamente la persona a la base de datos', async ()=>{
        
        //console.log(cliente)
        const response = await (request.post('/clientes')).send({cliente})
        expect(response.status)
    })
})