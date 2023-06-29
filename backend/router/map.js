import express from 'express'
import Controlador from '../controlador/map.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start(){
        //TODO: CUANDO ESTÉN TERMINADOS LOS METODOS, PROBAR OBTENER LA DIRECCIÓN EN LA URL CON EL ID DE UN CLIENTE
        //TODO: Si funciona, hacer que la página lo tome para ubicarlo como el punto de llegada del pedido
        //this.router.get('/:id',this.controlador.getDireccion)
        this.router.get('/placeholder',this.controlador.getPaginaTemporal)
        return this.router
    }
    
}

export default Router