import Servicio from '../service/clientes.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    crearCuenta = async (req,res) => {
        let mensaje = ""
        res.render('crearCuenta',{mensaje})
    }

    login = async (req,res) => {
        let mensaje = ""
        res.render('login',{mensaje})
    }

    ingresoCliente = async (req, res) => {
        try {
            const cliente = req.body
            console.log(cliente)
            const clienteIngresado = await this.servicio.ingresoCliente(cliente)
            console.log(cliente)
            if(clienteIngresado){
                let mensaje = "Bienvenido " + cliente.usuario
                return res.render('login',{mensaje})    // el return es para que no tire error porque solo se permite un res
            }
            let mensaje = "usuario o contraseña invalidos"
            res.render('login', {mensaje})
        }
        catch(error) {
            res.json({ error: error.message })
        }
    }

    guardarCliente = async (req, res) => {
        try {
            const cliente = req.body
            const clienteGuardado = await this.servicio.guardarCliente(cliente)
            let mensaje = "Gracias por registrate " + clienteGuardado.nombre
            res.render('crearCuenta', {mensaje})
            //res.json(clienteGuardado)
        }
        catch(error) {
            res.json({ error: error.message })
        }
    }

    actualizarCliente = async (req, res) => {
        try{
            const { id } = req.params
            const cliente = req.body
            const clienteActualizado = await this.servicio.actualizarCliente(id,cliente)
            res.json(clienteActualizado)
        }
        catch(error) {
            res.json({ error: error.message })
        }
    }

    borrarCliente = async (req, res) => {
        const { id } = req.params
        const clienteBorrado = await this.servicio.borrarCliente(id)
        res.json(clienteBorrado)
    }
}

export default Controlador

// obtenerClientes = async (req,res) => {
//     const { id } = req.params
//     const clientes = await this.servicio.obtenerClientes(id)
//     res.json(clientes)
// }