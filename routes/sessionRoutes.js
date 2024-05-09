// se importa express y se crea un router y ruta
const express = require("express")
const router = express.Router()
// se importa el controlador de sessionRouter.

const sessionController = require("../controllers/sessionController");
const verifyToken = require ("../middleware/verifyToken");

//Aqui interviene el middleware(verifyToken) que hace de barrera protectora q esta en medio del req y res en la ruta protegida para obtner inf sobre jennifer, es decir el usario q inicio sesion.

router.get("/currentUser", verifyToken, sessionController.getCurrentUser); // esta es la ruta protegida q tiene toda lainf del usario minetras esta conectado actualemtne.

module.exports = router;