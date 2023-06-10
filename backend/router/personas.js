import express from 'express'
import Controlador from '../controlador/personas.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/:id?', this.controlador.getPersona)
        this.router.post('/', this.controlador.setPersona)
        this.router.put('/:id', this.controlador.actualizarPersona)
        this.router.delete('/:id', this.controlador.borrarPersona)

        return this.router
    }    
}

export default Router