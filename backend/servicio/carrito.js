import Modelo from "../model/carritoDB.js"

class Servicio {

    constructor(){
        this.model = new Modelo();
    }


    setProducto = async (producto)=>{

        const mensajeError = 'El producto no se ingreso al stock'
       
        // falta crear las validaciones
        if(hayStock(producto)){

            const productoGuardado = await this.model.setProducto(producto);
            return productoGuardado

        }else{
            return mensajeError
        }


    }
}

export default Servicio