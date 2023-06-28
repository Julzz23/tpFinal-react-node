import express from 'express'
import CnxMongoDB from './model/DBMongo.js'
import RouterProductos from '../backend/router/productos.js'
import RouterPersonas from '../backend/router/personas.js'
import RouterCarrito from '../backend/router/carrito.js'
import RouterPagos from '../backend/router/pagos.js'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'

class Server {
    
    constructor(port,persistencia) {
    this.app = express()
    this.port=port
    this.MODO_PERSISTENCIA=persistencia
   

    }   
    

    async start(){

        // direcciones importadas para las vistas
        const __filename = fileURLToPath(import.meta.url) 
        const __dirname = path.dirname(__filename) 

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.set('views', path.join(__dirname, 'views')) //path.Join para unir las direccion del directorio con views
        this.app.set('view engine', 'ejs') //para usar render, formato ejs y que lo lea de la vista views
        
        this.app.use(morgan('dev')) //para ver las rutas por consola
        
        // ------------------------------------------
        //          API REST Ful
        // ------------------------------------------

        this.app.use('/productos', new RouterProductos().start())
        this.app.use('/clientes', new RouterPersonas().start())
        this.app.use('/carrito', new RouterCarrito().start())
        // this.app.use('/pagos', new RouterPagos().start())

        //VISTA FORMULARIO
        this.app.get('/',(req,res)=>res.render('index',{mensaje:''}))
        this.app.use((req,res)=>{res.status(404).send("no se encontro la pagina")})
        
        //-------------------------------------------
        //      Listen del servidor express
        //-------------------------------------------

        //Conexion a base de datos
        if(this.MODO_PERSISTENCIA == 'MONGODB') {
            await CnxMongoDB.conectar()
        }

        const PORT = this.port
        this.server = this.app.listen(PORT, () => console.log(`Servidor http express escuchando en http://127.0.0.1:${PORT}`))
        this.server.on('error', error => console.log(`Error en servidor: ${error.message}`))

        return this.app
    }
   
    //dejar de escuchar
     async stop(){

        this.server.close()
        await CnxMongoDB.desconectar()
    }
}
export default Server