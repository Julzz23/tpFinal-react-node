import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1'
const BASE = process.env.BASE || 'ProyectoFinalTP2'



export default {
    PORT,   // es igual a -> PORT : PORT
    MODO_PERSISTENCIA,
    STRCNX,
    BASE
}

