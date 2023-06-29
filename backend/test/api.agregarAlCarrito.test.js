import supertest from "supertest";
import { expect } from "chai";
import { describe } from "mocha";
import generador from './generadores/clientes.js'


var cliente 
const request = supertest('http://127.0.0.1:8080')

describe('prueba de ingreso de persona',()=>{

    it('llama al cliente que desea comprar', async ()=>{

        const cliente = await (request.get('/cliente/123456789'))
        console.log('*** CLIENTE TRAIDO DE BASE DE DATOS ******')
        console.log(cliente)

    })
       
    it('deberia poder comprar un producto', async ()=>{

        const clienteID = cliente._id
        const productoID = '123456789'
        const queryString = '?id_persona=' + clienteID + '&id_producto=' + productoID;
        
        const response = await ( request.post('/clientes/agregarAlCarrito/'+ queryString)).send()
        expect(response.status)
    })
})