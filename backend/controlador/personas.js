import Servicio from "../servicio/personas.js";

class Controlador {
    constructor() {
        this.servicio = new Servicio();
    }

    getPersona = async (req, res) => {
        try{
            const { id } = req.params;
            const persona = await this.servicio.getPersona(id);
            res.json(persona);
        }catch(error){
            res.json({error: error.message})
        }
        
     };
  
    setPersona = async (req, res) => {
        try {
            const persona = req.body;
            const PersonaGuardada = await this.servicio.setPersona(persona);
            res.json(PersonaGuardada);
        } catch (error) {
         res.json({ error: error.message });
        }
     };

     actualizarPersona = async(req,res)=>{
        //TODO: Acá se toma el id y el objeto persona, pero para actualizar se pasa el dni y el objeto persona?
        const {id} = req.params
        const persona = req.body;
        const PersonaActualizada = await this.servicio.actualizarPersona(dni,persona);
        res.json(PersonaActualizada);
     }

     eliminarPersona = async(req,res)=>{
        const { id } = req.params;
        const PersonaEliminada = await this.servicio.eliminarPersona(id);
        res.json(PersonaEliminada);
     }
}

export default Controlador