import Modelo from "../model/personasDB.js"
import { validar } from "../validaciones/persona.js" 

class Servicio {

    constructor(){
        this.model = new Modelo();
    }


    setPersona = async (persona)=>{
       
        const validacion = validar(persona)
        if(validacion.result){
            const persona = await this.model.setPersona(persona);
            return persona
        }else{
            return validacion.result
        }
           
    }

    getPersona = async (dni)=>{

        const persona = await this.model.getPersona(dni);

        return persona;
    }

    actualizarPersona = async (dni,persona)=>{
        const validacion = validar(persona)
        if(validacion.result){
            const personaActualizada = await this.model.actualizarPersona(dni,persona)
            return personaActualizada
        }else{
            return validacion.result
        }

    }

    eliminarPersona = async(dni) =>{

        const personaEliminada = await this.model.eliminarPersona(dni)
        return personaEliminada

    }
}

export default Servicio