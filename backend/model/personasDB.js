import { ObjectId } from "mongodb";
import CnxMongoDB from "../model/DBMongo.js";
import ModelCarritoDB from "../model/carritoDB.js";

class ModelPersonaDB {
  constructor() {

    this.carrito = new ModelCarritoDB()
  }

  getPersona = async (dni) => {
    if (!CnxMongoDB.connectOk) return dni ? {} : [];
    if (dni) {
      const persona = await CnxMongoDB.db
        .collection("personas")
        .findOne({ _dni: new ObjectId(dni) });
      return persona;
    } else {
      const personas = await CnxMongoDB.db
        .collection("personas")
        .find({})
        .toArray();
      return personas;
    }
  };

  setPersona = async (persona) => {
    //creando carrito para persona
    if (!CnxMongoDB.connectOk) return {};

    //creando persona y carrito vacio
    await CnxMongoDB.db.collection("personas").insertOne(persona);

    return persona;
  };

  actualizarPersona = async (dni, persona) => {
    if (!CnxMongoDB.connectOk) return {}; //valida conexion

    //buscar persona por dni y modificar contenido
    await CnxMongoDB.db
      .collection("personas")
      .updateOne({ _dni: new ObjectId(dni) }, { $set: persona });

    const personaActualizada = await this.getPersonas(dni);
    return personaActualizada;
  };

  eliminarPersona = async (dni) => {
    if (!CnxMongoDB.connectOk) return {};

    //console.log(id)

    const personaEliminada = await this.getPersonas(dni);
    await CnxMongoDB.db
      .collection("personas")
      .deleteOne({ _dni: new ObjectId(dni) });

    return personaEliminada;
  };
}

export default ModelPersonaDB