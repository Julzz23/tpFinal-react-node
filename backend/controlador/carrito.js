import Servicio from "../servicio/carrito.js";

class Controlador {
  constructor() {
    this.servicio = new Servicio();
  }

  calcularTotal = async (req, res) => {
    try {
      const id = req.params;
      const calcularTotal = await this.servicio.calcularTotal(id);
      res.json(calcularTotal);
    } catch(error) {
      res.json({ error: error.message });
    }
  };

  getCarrito = async (req, res) => {
    try {
      const id = req.params;
      const carrito = await this.servicio.getCarrito(id)
      res.json(carrito);
    } catch(error) {
      res.json({ error: error.message });
    }
  };

  getProductos = async (req, res) => {
    try {
      const id = req.params;
      const productos = await this.servicio.getProductos(id)
      res.json(productos);
    } catch(error) {
      res.json({ error: error.message });
    }
  };

  crearCarrito = async (req, res) => {
    try {
      const { dni } = req.params;
      const carrito = await this.servicio.crearCarrito(dni);
      res.json(carrito);
    } catch (error) {
      res.json({ error: error.message });
    }
  };

  agregarProducto = async (req, res) => {
    try {
      const producto = req.body;
      const productoGuardado = await this.servicio.agregarProducto(producto);
      res.json(productoGuardado);
    } catch (error) {
      res.json({ error: error.message });
    }
  };

  vaciarCarrito = async (req, res) => {
    try {
      const id = req.params;
      const carritoNuevo = await this.servicio.vaciarCarrito(id);
      res.json(carritoNuevo);
    } catch(error) {
      res.json({ error: error.message });
    }
  };
  
  eliminarProducto = async (req, res) => {
    try {
      const producto = req.body;
      const ProductoEliminado = await this.servicio.eliminarProducto(producto);
      res.json(ProductoEliminado);
    } catch (error) {
      res.json({ error: error.message });
    }
  };

}

export default Controlador;
