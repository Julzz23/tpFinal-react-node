import express from 'express'
import config from './config.js'
import CnxMongoDB from './model/DBMongo.js'
import RouterProductos from '../backend/router/productos.js'
import RouterPersonas from '../backend/router/personas.js'
import RouterCarrito from '../backend/router/carrito.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ------------------------------------------
//          API REST Ful
// ------------------------------------------

app.use('/productos', new RouterProductos().start())
app.use('/personas', new RouterPersonas().start())
app.use('/carrito', new RouterCarrito().start())


//-------------------------------------------
//      Listen del servidor express
//-------------------------------------------
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://127.0.0.1:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
