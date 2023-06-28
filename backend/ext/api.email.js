import nodemailer from "nodemailer"

const enviarEmail = async (cliente) => {
  const configuracion = {
    host: process.env.HOST,
    port: process.env.PORT_EMAIL,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  }
  const mensaje = {
    from:'Equipo Dafejuka <xample@xample.com>',
    to:`${cliente.email}`,
    subject:`Hola ${cliente.nombre}, gracias por suscribribirte`,
    html:`<b>Buenas noches ${cliente.nombre} gracias por suscribirte a nuestra app</b>`
  }
  const transporte = nodemailer.createTransport(configuracion)
  await transporte.sendMail(mensaje)
}

export default {enviarEmail}