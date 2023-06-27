import supertest from "supertest";
import { expect } from "chai";
import { describe } from "mocha";
import generador from './generadores/personas.js'



const request = supertest('http://127.0.0.1:8080')

describe('prueba de ingreso de persona',()=>{


    describe('POST',()=>{

        it('tendria que poder ingresar correctamente la persona  a la base de datos',async ()=>{

            const persona = generador.get()
            console.log('****** PERSONA CREADA ************')
            console.log(persona)

            const response = await ( request.post('/personas')).send(persona)

            expect(response.status)

            console.log(response.body)
        })

    })
})