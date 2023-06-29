import Servicio from "../servicio/map.js";

class Controlador {
  constructor() {
    this.servicio = new Servicio();
  }
  //TODO: Ver cómo extraer la direccion de un cliente (lo intenté en la capa de servicio)
  /*
  getDireccion = async (req, res) => {
    try {
        const { id } = req.params
        const direccion = await this.servicio.getDireccion(id)
        //Acá cuando se hace el render, tendría que ser con el id:
        res.render("map", { mensaje });
    } catch (error) {
      res.json({ error: error.message });
    }
  };
*/
  getPaginaTemporal = async (req, res) => {
    let mensaje = "";
    res.render("map", { mensaje });
  };
}

export default Controlador;
