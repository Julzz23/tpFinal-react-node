import express from 'express'
import Controlador from '../controlador/pagos.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }


    start(){
        this.router.post('/crearPago',this.controlador.crearPago)
        this.router.get('/confirmado',(req,res)=> res.send('pago creado'))
        this.router.get('/fallida',(req,res)=> res.send('pago fallido'))
    }
    
}

export default Router