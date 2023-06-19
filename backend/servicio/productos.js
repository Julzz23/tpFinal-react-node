import Modelo from "./model/productosDB.js";
import { validar } from "../validaciones/productos.js";

class Servicio {
  constructor() {
    this.model = new Modelo();
  }

  setProducto = async (producto) => {
    const validacion = validar(producto);
    if (validacion.result) {
      const producto = await this.model.setProducto(producto);
      return producto;
    } else {
      return validacion.result;
    }
  };

  getPersona = async (id) => {
    const producto = await this.model.getProducto(id);

    return producto;
  };

  actualizarPersona = async (id, producto) => {
    const validacion = validar(producto);
    if (validacion.result) {
      const productoActualizado = await this.model.actualizarProducto(
        id,
        producto
      );
      return productoActualizado;
    } else {
      return validacion.result;
    }
  };

  eliminarProducto = async (id) => {
    const productoEliminado = await this.model.eliminarProducto(id);
    return productoEliminado;
  };
}
