import Joi from "joi";

const validar = (producto) => {
  const ProductoSchema = Joi.object({
    
    nombre: Joi.string().required(),
    categoria: Joi.String().required(),
    marca: Joi.String().required(),
    modelo: Joi.number().min(1).max(99).required(),
    precio: Joi.number().required().min(1).max(999999),
    expiracion : Joi.date().required()

  });


};

export default validar