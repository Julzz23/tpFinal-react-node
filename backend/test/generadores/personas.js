import {faker} from "@faker-js/faker"

const get = _=>({

    nombre: faker.person.firstName(),
    apellido: faker.person.lastName(),
    pass: faker.number.bigInt(),
    edad: faker.number.int({min: 18 , max:99}),
    email: "prueba@hotmail.com",
    celular: faker.phone.number(),
    dni: Math.floor((Math.random() * (0 - 99999999 + 1))),
    direccion: faker.location.streetAddress(),


})

export default{

    get
}

