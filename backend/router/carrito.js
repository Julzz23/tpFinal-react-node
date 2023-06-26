import express from 'express'
import Controlador from '../controlador/carrito.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {

        //rutas GET
        this.router.get('/:idCarrito/calcularTotal', this.controlador.calcularTotal)
        this.router.get('/:idCarrito', this.controlador.getCarrito)
        this.router.get('/:idCarrito/productos', this.controlador.getProductos)
        //rutas POST
        this.router.post('/:idCarrito', this.controlador.crearCarrito)
        this.router.post('/:producto', this.controlador.agregarProducto)

        //rutas PUT
        this.router.put('/:idCarrito',this.controlador.vaciarCarrito)

        //rutas DELETE
        this.router.delete('/:producto', this.controlador.eliminarProducto)
        

        return this.router
    }    
}

export default Router