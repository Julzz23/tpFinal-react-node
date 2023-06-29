import Joi from "joi";

export const validar = (producto) => {
  const productoSchema = Joi.object({
    
    nombre: Joi.string().required(),
    categoria: Joi.String().required(),
    marca: Joi.String().required(),
    modelo: Joi.number().min(1).max(99).required(),
    precio: Joi.number().required().min(1).max(999999),
   
  });

  const { error } = productoSchema.validate(producto);
  if(error) {
      return { result: false, error }     // validación falló
  }

  return { result: true } 

};

