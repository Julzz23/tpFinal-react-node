import express from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ------------------------------------------
//          API REST Ful : Productos
// ------------------------------------------
app.use()
//----------------------------
// LISTEN DEL SERVIDOR EXPRESS 
//----------------------------
const PORT = 8080;
const server = app.listen(PORT, () => console.log("servidor escuchando...http://localhost:8080"));
server.on("error", (error) =>
  console.log('Error en servidor: ${error.message}')
);
