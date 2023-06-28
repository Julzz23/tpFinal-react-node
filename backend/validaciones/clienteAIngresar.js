import Joi from "joi"

export const validarIngreso = clienteAIngresar => {
    const productoSchema = Joi.object({
        usuario: Joi.string().regex(/^[,. a-z0-9]+$/).required(),
        password: Joi.string().regex(/^[,. a-z0-9]+$/).required(),
        esCliente: Joi.boolean().default(false)
    })
    
    const { error } = productoSchema.validate(clienteAIngresar);
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}