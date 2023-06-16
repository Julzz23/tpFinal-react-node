import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongo.js";

class ModelPersonaDB {
  constructor() {}

  getPersonas = async (dni) => {
    if (!CnxMongoDB.connectOk) return id ? {} : [];
    if (id) {
      const persona = await CnxMongoDB.db
        .collection("personas")
        .findOne({ _dni: new ObjectId(dni) });
      return persona;
    } else {
      const persomas = await CnxMongoDB.db
        .collection("personas")
        .find({})
        .toArray();
      return personas;
    }
  };

  setPersona = async (persona) => {
    if (!CnxMongoDB.connectOk) return {};
    await CnxMongoDB.db.collection("personas").insertOne(persona);
    return persona;
  };

  actualizarPersona = async (dni,persona) => {
    if (!CnxMongoDB.connectOk) return {};

    //console.log(id, producto)

    await CnxMongoDB.db.collection("personas").updateOne(
      { _dni: new ObjectId(dni) }, // query
      { $set: persona }
    );

    const personaActualizada = await this.getPersonas(dni);
    return personaActualizada;
  };

  eliminarPersona = async (id) => {
    if (!CnxMongoDB.connectOk) return {};

    //console.log(id)

    const personaEliminada = await this.getPersonas(id);
    await CnxMongoDB.db
      .collection("personas")
      .deleteOne({ _id: new ObjectId(id) });

    return personaEliminada;
  };
}
