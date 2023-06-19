import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongo.js";

class ModelPersonaDB {
  constructor() {}

  getProducto = async (id) => {
    if (!CnxMongoDB.connectOk) return id ? {} : [];
    if (id) {
      const productos = await CnxMongoDB.db
        .collection("productos")
        .findOne({ _dni: new ObjectId(id) });
      return productos;
    } else {
      const producto = await CnxMongoDB.db
        .collection("productos")
        .find({})
        .toArray();
      return producto;
    }
  };

  setProducto = async (producto) => {
    if (!CnxMongoDB.connectOk) return {};
    await CnxMongoDB.db.collection("productos").insertOne(producto);
    return producto;
  };

  actualizarProducto = async (id, producto) => {
    if (!CnxMongoDB.connectOk) return {}; //valida conexion

    //buscar persona por dni y modificar contenido
    await CnxMongoDB.db
      .collection("productos")
      .updateOne({ _id: new ObjectId(id) }, { $set: producto });

    const productoActualizado = await this.getProducto(id);
    return productoActualizado;
  };

  eliminarProducto = async (id) => {
    if (!CnxMongoDB.connectOk) return {};

    const productoEliminado = await this.getProducto(id);
    await CnxMongoDB.db
      .collection("productos")
      .deleteOne({ _id: new ObjectId(id) });

    return productoEliminado;
  };
  
}