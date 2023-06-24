import express from 'express'
import Controlador from '../controlador/carrito.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/:id', this.controlador.getCarrito)
        this.router.post('/carrito', this.controlador.setProducto)
        this.router.put('/carrito/:id', this.controlador.actualizarProducto)
        this.router.delete('/carrito/:id', this.controlador.eliminarProducto)

        return this.router
    }    
}

export default Router