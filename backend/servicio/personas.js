import Modelo from "./model/personasDB.js"
import { validar } from "../validaciones/productos.js" 

class Servicio {

    constructor(){
        this.model = new Modelo();
    }


    setPersona = async (persona)=>{
       
        const res = validar(persona)
        if(res.result){
            const persona = await this.model.setPersona(persona);
            return persona
        }else{
            return res.result
        }
           
    }

    getPersona = async (dni)=>{

        const persona = await this.model.getPersona(dni);

        return persona;
    }

    actualizarPersona = async (dni,persona)=>{

        const personaActualizada = await this.model.actualizarPersona(dni,persona)
        return personaActualizada

    }
}