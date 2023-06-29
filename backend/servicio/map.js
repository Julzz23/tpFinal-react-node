import Model from "../model/clientesDB.js"

class Servicio {
    constructor() {
        this.model = new Model()
    }

    getDireccion = async id => {
        const clientes = await this.model.obtenerClientes(id)
        //TODO: FIJARSE COMO EXTRAER LA DIRECCION
        const direccion = clientes.direccion
        return direccion
    }
}

export default Servicio