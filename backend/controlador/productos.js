import Servicio from "../servicio/productos.js";

class Controlador {
  constructor() {
    this.servicio = new Servicio();
  }

  getProducto = async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await this.servicio.getProducto(id);
      res.json(producto);
    } catch (error) {
      res.json({ error: error.message });
    }
  };

  setProducto = async (req, res) => {
    try {
      const producto = req.body;
      const ProductoGuardado = await this.servicio.setProducto(producto);
      res.json(ProductoGuardado);
    } catch (error) {
      res.json({ error: error.message });
    }
  };

  actualizarProducto = async (req, res) => {
    const {id} = req.params.id
    const producto = req.body;
    const ProductoGuardado = await this.servicio.actualizarProducto(id,producto);
    res.json(ProductoGuardado);
  };
  
  eliminarProducto = async (req, res) => {
    const { id } = req.params;
    const ProductoEliminado = await this.servicio.eliminarProducto(id);
    res.json(ProductoEliminado);
  };
}

export default Controlador