import Model from "../model/clientesDB.js"
import { validarIngreso } from "../validaciones/clienteAIngresar.js" 
import { validarCliente } from "../validaciones/clienteAGuardar.js" 
import email from "../ext/api.email.js"

class Servicio {
    constructor() {
        this.model = new Model()
    }

    obtenerClientes = async id => {
        const clientes = await this.model.obtenerClientes(id)
        return clientes
    }

    ingresoCliente = async cliente => {
        const res = validarIngreso(cliente)
        if(res.result) {
            const clienteIngresado = await this.model.ingresoCliente(cliente)
            if(clienteIngresado){
                return clienteIngresado
            }
            return null
        }
        else {
            throw res.error
        }
    }

    guardarCliente = async cliente => {
        const res = validarCliente(cliente)
        if(res.result) {
            const clienteGuardado = await this.model.guardarCliente(cliente)
            await email.enviarEmail(cliente)
            return clienteGuardado
        }
        else {
            throw res.error
        }
    }

    actualizarCliente = async (id, cliente) => {
        const res = validar(cliente)
        if(res.result) {
            const clienteActualizado = await this.model.actualizarCliente(id, cliente)
            return clienteActualizado
        }
        else {
            throw res.error
        }
    }

    borrarCliente = async id => {
        const clienteBorrado = await this.model.borrarCliente(id)
        return clienteBorrado
    }
}

export default Servicio