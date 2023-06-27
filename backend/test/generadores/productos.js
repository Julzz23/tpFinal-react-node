import {faker} from "@faker-js/faker"

const get = _=>({

    nombre: faker.commerce.productName(),
    categoria: faker.company.name(),
    marca: faker.animal(),
    modelo: faker.color(),
    precio: faker.commerce.price(),
    expiracion : faker.date.between({from:'2023-07-01', to:'2026-07-01'}),

})

export default {
    get
}