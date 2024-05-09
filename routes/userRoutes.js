// se importa express y crea el router 

const express = require("express")
const router = express.Router()
// se importa el controlador de los usuarios.
const userController = require ("../controllers/userController")
//crud rutas de los modulos
router.get("/", userController.getAllUsers) //ruta qeu obtiene todo los usuarios
router.post("/",userController.createUser)// ruta que crea un usuario
router.put("/:id", userController.updateUser) // ruta que actualiza un usuario
router.delete("/:id", userController.deleteUser) // ruta que elimina el usuario


// se exporta este modulo para usarlo en toda la base de datos
module.exports= router