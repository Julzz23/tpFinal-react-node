import Servicio from "../servicio/carrito.js";

class Controlador {
    constructor() {
        this.servicio = new Servicio();
    }

    getCarrito = async (req, res) => {
        try{
            const { id } = req.params;
            const persona = await this.servicio.getCarrito(id);
            res.json(carrito);
        }catch(error){
            res.json({error: error.message})
        }
        
     };

     setProducto = async (req, res) => {
        try {
            const producto = req.body;
            const productoGuardado = await this.servicio.setProducto(producto);
            res.json(productoGuardado);
        } catch (error) {
         res.json({ error: error.message });
        }
     };

     actualizarProducto = async(req,res)=>{
        try{
            const {id} = req.params
            const producto = req.body;
            const productoActualizado = await this.servicio.actualizarProducto(producto);
            res.json(productoActualizado);
        }catch (error) {
            res.json({ error: error.message });
           }
       
     }

     eliminarProducto = async (req, res) => {
        try{
            const { id } = req.params;
            const ProductoEliminado = await this.servicio.eliminarProducto(id);
            res.json(ProductoEliminado);
        }  catch (error) {
            res.json({ error: error.message });
           }
       
      };
}

export default Controlador