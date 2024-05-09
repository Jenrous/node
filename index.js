// se importa express y conectDB es para la conexion a la base de datos.
const express = require("express")

const connectDb = require ("./db/db")
const { connect } = require("mongoose")

// se importa las rutas ya creads
const userRoutes = require ("./routes/userRoutes")
const authRoutes = require ("./routes/authRoutes")
const sessionRoutes = require ("./routes/sessionRoutes")


const app = express()
const PORT = 3000
//middleware

app.use (express.json()) // se lla al middleware para que parsee los datos del body que solicitamos en formato json.

//rutas de autenticacion

app.use("/api/auth", authRoutes)


//ruta de usuarios


app.use ("/api/users", userRoutes) // se crea la ruta de usuario en la ruta /api/users.

// ruta de usuario actual, es decir la ruta de jennifer

app.use("/api/session", sessionRoutes)

// conexion a la base de datos

connectDb()

// servidor iniciado y recuerda rocio lo ponemos porq es la escucha que actualiza inmediatamente y se puso arriba :)

app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto: " + PORT);
})





// CRUD, APRENDETELO ROCIO PORFAVOR :/

//RUTAS
// crea un usuario nuevo con todos los datos y la contraena encriptada.
// POST   http://localhost:3000/api/users

// actualizar un usuario ya creado, despues de users los numeros y letras que se ven ahi son el id que da mongoDB para identificar los usuarios
// PUT    http://localhost:3000/api/users/663c048e7a794f660ebddcda      http://localhost:3000/api/users/:id  los dos puntos redirigen

// elimina un usuario, tambien es por ID
// DELETE  http://localhost:3000/api/users/663c048e7a794f660ebddcda      http://localhost:3000/api/users/:id  los dos puntos redirigen

// mostrar todos los usuarios que se hayan creado en la base de datos
// GET    http://localhost:3000/api/users

// se acabo el CRUD



// AHORA VAMOS EL INICIO Y CIERRE DE SESION, TU PUEDES ROCIO, DALE!!! :)

// iniciar sesion del usuario 
// POST http://localhost:3000/api/auth/login  al ingresar te tiene que dar un token y se tiene que guardar en la base de datos

// estar en la sesion actual del usuario que se ingreso
// GET http://localhost:3000/api/session/currentUser

// cerrar sesion
//POST http://localhost:3000/api/auth/logout


