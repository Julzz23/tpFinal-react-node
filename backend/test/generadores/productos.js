import {faker} from "@faker-js/faker"

const get = _=>({


    nombre: faker.commerce.productName(),
    categoria: ,
    marca: faker.
    modelo: Joi.number().min(1).max(99).required(),
    precio: Joi.number().required().min(1).max(999999),
    expiracion : Joi.date().required()

})