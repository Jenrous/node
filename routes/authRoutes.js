const express = require("express");// se exporta expres
const router = express.Router();// se crea el router

// rutas protegidas de ingreso de token; aqui no interviene el middelware porq sino nunca existiria proceso de proteccion.
const authController = require ("../controllers/authController");

// se importa el middleware de seguridad

const verifyToken = require("../middleware/verifyToken")

//ruta para iniciar sesion
router.post ("/login", authController.login); // el middleware no se crea aqui porq si no ingresa a la sesion

//ruta para cerrar sesion
router.post("/logout", verifyToken, authController.logout);

module.exports = router;










