import Joi from "joi"

export const validarCliente = clienteAGuardar => {
    const productoSchema = Joi.object({
        nombre: Joi.string().regex(/^[,. a-z0-9]+$/).required(),
        dni: Joi.number().integer().required(),
        email: Joi.string().email().required(),
        telefono: Joi.number().integer().required(),
        direccion: Joi.string().regex(/^[,. a-z0-9]+$/).required(),
        usuario: Joi.string().regex(/^[,. a-z0-9]+$/).required(),
        password: Joi.string().regex(/^[,. a-z0-9]+$/).required(),
        esCliente: Joi.boolean().default(false)
    })
    
    const { error } = productoSchema.validate(clienteAGuardar);
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}