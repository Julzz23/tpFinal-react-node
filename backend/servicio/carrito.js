import ModeloCarrito from "../model/carritoDB.js"

class ServicioCarrito {

    constructor(){
        this.model = new ModeloCarrito();
    }

    calcularTotal = async(id)=>{
        const productos = this.getProductos(id)
        for (var i = 0; i < productos.length; i++) {
            // Sumar el precio de cada producto al total
             total += productos[i].precio;
          }
          return total
    }

    getProductos = async(id)=>{
        const productos = await this.model.getProductos(id);
        return productos
    }

    getCarrito = async (id)=>{
        const carrito = await this.model.getCarrito(id);
        return carrito
    }

    crearCarrito = async (id)=>{
        const carrito = await this.model.crearCarrito(id);
        return carrito
    }

    agregarProducto = async(producto)=>{
        const productoAgregado = await this.model.agregarProducto(producto)
        return producto;

    }

    eliminarProducto = async(producto)=>{
        const productoAgregado = await this.model.eliminarProducto(producto)
        return producto;
    }

}

export default ServicioCarrito