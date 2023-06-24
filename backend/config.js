import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA
const STRCNX = process.env.STRCNX 
const BASE = process.env.BASE || 'test'


export default {
    PORT,   // es igual a -> PORT : PORT
    MODO_PERSISTENCIA,
    STRCNX,
    BASE
}

