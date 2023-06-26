import Joi from "joi";

export const validar = (carrito) => {
  const carritoSchema = Joi.object({
    
    nombre: Joi.string().required(),
    img: Joi.string().required(),
    precio: Joi.number().min(0).required(),
    cantidad: Joi.number().required()
    
  });

  const { error } = carritoSchema.validate(carrito);
  if(error) {
      return { result: false, error }     // validación falló
  }

  return { result: true } 

};