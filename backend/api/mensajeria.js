//emailtesting -> inboxes -> smtp/pop3 -> integrations = nodemailer -> show credentials
    
//npm i nodemailer

const enviarMail = async () => {
  const configuracion = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9aac4fe0c889cf",
      pass: "7b1da86bd4b353"
    }
  }
  const mensaje = {
    from:'"nombre" <xample@xample.com>',
    to:'test@test.com',
    subject:"Asunto",
    html:"<b>cuerpo del mail</b>"
  }
  const transporte = nodemailer.createTransport(configuracion)
  const informacion = await transporte.sendMail(mensaje)

  console.log(informacion)
}
enviarMail()

export default {enviarMail}
