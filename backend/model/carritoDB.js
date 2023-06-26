import CnxMongoDB from "./DBMongo";

class ModelCarritoDB {
   
    constructor(dni) {
        this.identificador = dni;
    };
  
    setCarrito = async (carrito) => {
        if (!CnxMongoDB.connectOk) return {};
        await CnxMongoDB.db.collection("carrito").insertOne(carrito);
        return carrito;
      };

    vaciarCarrito = async(dni) =>{

        const productos = []
        if (!CnxMongoDB.connectOk) return {};

        await CnxMongoDB.db
      .collection("carrito")
      .updateOne({ identificador: new ObjectId(dni) }, { $set: productos });
    }
  
    agregarProducto = async(producto)=>{
        if (!CnxMongoDB.connectOk) return {};
        await CnxMongoDB.db.collection('carrito').updateOne(
          { $addToSet: { "carrito.productos": producto } }
       );
        return producto;
      };

    eliminarProducto = async(id, producto)=>{
        if (!CnxMongoDB.connectOk) return {};
        await CnxMongoDB.db.collection('carrito').updateOne(
          { _identificador: ObjectId(id) },
          { $pull: { "carrito.productos": { $in: [producto] }, $slice: -1 } }
       );
        return producto;
    }

    traerProductos = async(id)=>{
        const productos = []
        productos = await CnxMongoDB.collection("carrito").find(
        { _identificador: ObjectId(id) },
        { "carrito.productos": 1 })
        .toArray();
        return productos
    }

    }
export default ModelCarritoDB
