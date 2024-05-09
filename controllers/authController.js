const authService = require ("../services/authService");
const AuthToken = require ("../models/AuthToken");
const bcryptService = require ("../services/bcryptService");
const User = require ("../models/users");
//  congtrolador para utilizar la autenticacion de usuarios.

function login(req, res){
    const {email, contraseña} = req.body
    User.findOne ({email})
    .then((user)=>{
        if (!user){
            return res.status (401).json({message: "Credenciales Inválidas"})
        }

        // aqui va la contrasena que ingresa jennifer como usuario con la contrasenaalmacenada en la base de datos
         bcryptService.comparePassword (contraseña, user.contraseña)
         .then ((match)=>{
            if(!match){
                return res.status(401).json({message: "Credenciales invalidas"})
            }
            // si la contrasena ingresada hace match con la contrasena
            // guardada en la base de datos, es decir con la que el usuario, en este caso jennifer se registro, coinciden, entonces se crea el token.
            
            const token = authService.generateToken(user);
            // guardar el token en la base de datos

            AuthToken.create({userId: user._id, token})
            .then(()=>{
                res.json({token})
            })
            .catch((error)=>{
                console.error(error)
                res.status(500).json({message: "Error al inciar sesion"})
            })
         }).catch((error)=>{
            console.error(error)
            res.status(500).json({message: "Error al inciar sesion"})
        })
    }).catch((error)=>{
        console.error(error)
        res.status(500).json({message: "Error al inciar sesion"})
    })
}


// controlador para cerrar sesion

function logout (req, res){
    const token = req.headers.authorization.split(" ")[1]

    AuthToken.findOneAndDelete ({token})
    .then(()=>{
        res.status(200).json({message: "Sesion cerrada con éxito", error:{token}})
    })
    .catch((error)=>{
        console.error(error)
        res.status(500).json({message: "Error al iniciar sesion"})
    })
}
module.exports={
    login,
    logout
}












