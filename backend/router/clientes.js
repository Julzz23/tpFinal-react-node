import express from 'express'
import Controlador from '../controlador/clientes.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/login', this.controlador.login)
        this.router.post('/login', this.controlador.ingresoCliente)
        this.router.get('/crearCuenta', this.controlador.crearCuenta)
        this.router.post('/crearCuenta', this.controlador.guardarCliente)
        this.router.put('/actualizar/:id', this.controlador.actualizarCliente)
        this.router.delete('/borrar/:id', this.controlador.borrarCliente)
        this.router.post('/agregarAlCarrito/', this.controlador.agregarAlCarrito)

        return this.router
    }    
}

export default Router

        //this.router.get('/clientes:id?', this.controlador.obtenerClientes)