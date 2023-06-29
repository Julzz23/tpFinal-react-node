import { ObjectId } from "mongodb"
import CnxMongoDB from "../model/DBMongo.js"
import ModelCarritoDB from "./carritoDB.js"

class ModelMongoDB {
    constructor() {

        this.carrito = new ModelCarritoDB()
    }

    obtenerClientes = async id => {
        if(!CnxMongoDB.connectOk) return id? {} : []
        if(id) {
            try {
                const cliente = await CnxMongoDB.db.collection('clientes').findOne({_id: new ObjectId(id)})
                return cliente
            }
            catch(error){
                return ("Id inexistente: " + error.message)
            }
        }
        else {
            const clientes = await CnxMongoDB.db.collection('clientes').find({}).toArray()
            return clientes
        }
    }

    ingresoCliente = async cliente => {
        if(!CnxMongoDB.connectOk) return {}
        const clienteIngresado = await CnxMongoDB.db.collection('clientes').findOne({usuario:cliente.usuario,password:cliente.password})
        if(clienteIngresado){
            return cliente
        }
        return null
    }

    guardarCliente = async cliente => {
        if(!CnxMongoDB.connectOk) return {}
        await CnxMongoDB.db.collection('clientes').insertOne(cliente)
        return cliente
    }

    actualizarCliente = async (id, cliente) => {
        if(!CnxMongoDB.connectOk) return {}
            try{
                await CnxMongoDB.db.collection('clientes').updateOne({_id: new ObjectId(id)},{ $set: cliente })
                const clienteActualizado = await this.obtenerClientes(id)
                return clienteActualizado
            }
            catch(error){
                return ("Id inexistente: " + error.message)
            }
    }

    borrarCliente = async id => {
        if(!CnxMongoDB.connectOk) return {}
        try{
            const clienteEliminado = await this.obtenerClientes(id)
            await CnxMongoDB.db.collection('clientes').deleteOne({_id: new ObjectId(id)})
            return clienteEliminado
        }
        catch(error){
            return ("Id inexistente: " + error.message)
        }
    }
}

export default ModelMongoDB



