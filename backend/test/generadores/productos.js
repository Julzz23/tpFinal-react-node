import {faker} from "@faker-js/faker"

const get = _=>({

    nombre: faker.commerce.productName(),
    categoria: faker.company.name(),
    marca: faker.animal(),
    modelo: faker.color(),
    precio: faker.commerce.price(),

})

export default {
    get
}