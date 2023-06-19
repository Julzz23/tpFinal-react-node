import Joi from "joi";

const validar = (persona) => {
  const PersonaSchema = Joi.object({
    nombre: Joi.String().required(),
    apellido: Joi.String().required(),
    edad: Joi.number().min(1).max(99).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net","ar"] },
    }).required(),
    celular: Joi.number().required(),
    dni: Joi.String().min(6).max(10).required(),
    direccion: Joi.String().required(),

  });


};

export default validar