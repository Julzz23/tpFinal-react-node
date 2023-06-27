import express from 'express'
import CnxMongoDB from './model/DBMongo.js'
import RouterProductos from '../backend/router/productos.js'
import RouterPersonas from '../backend/router/personas.js'
import RouterCarrito from '../backend/router/carrito.js'

class Server {
x
    constructor(port,persistencia) {
    this.app = express()
    this.port=port
    this.MODO_PERSISTENCIA=persistencia

    }   
    

    async start(){

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))

        // ------------------------------------------
        //          API REST Ful
        // ------------------------------------------

        this.app.use('/productos', new RouterProductos().start())
        this.app.use('/personas', new RouterPersonas().start())
        this.app.use('/carrito', new RouterCarrito().start())

        //-------------------------------------------
        //      Listen del servidor express
        //-------------------------------------------
        if(this.MODO_PERSISTENCIA == 'MONGODB') {
            await CnxMongoDB.conectar()
        }

        const PORT = this.port
        this.server = this.app.listen(PORT, () => console.log(`Servidor http express escuchando en http://127.0.0.1:${PORT}`))
        this.server.on('error', error => console.log(`Error en servidor: ${error.message}`))

        return this.app
    }
   
     async stop(){

        this.server.close()
        await CnxMongoDB.desconectar()
    }
}
export default Server