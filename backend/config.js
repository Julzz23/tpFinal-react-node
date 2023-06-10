const PORT = 8080
const MODO_PERSISTENCIA = 'MONGODB'    // 'MEM' - 'FILE' - 'MONGODB'
//const STRCNX = 'mongodb://127.0.0.1'
const STRCNX = 'mongodb+srv://julian:julian123@cluster0.qmas6xn.mongodb.net/?retryWrites=true&w=majority'
const BASE = 'mibase'

export default {
    PORT,   // es igual a -> PORT : PORT
    MODO_PERSISTENCIA,
    STRCNX,
    BASE
}