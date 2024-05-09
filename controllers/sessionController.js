const User = require("../models/users")
//controlador para el inicio de sesion del usuario en este caso jennifer.

function getCurrentUser(req, res){
    new Promise ((resolve, reject)=>{ // jennifer ingresa sus datos de inicio de sesion y el middleware de auth  almacena toda esa informacion en el id del usuario  en req.user.Id
        const userId = req.userId
        User.findById(userId)// busca el id de usuaruio de jennifer en la base de datos
        .then(user=>{
            //verifica si se encpntro el usuario
            if (!user){
                reject({status:404, message: 'Usuario no encontrado'});

            }else{
                resolve(user);
            }
        })
        .catch(error=> reject({status:500, message: 'Error al obtener informaci{on del usuario', error}));

    })
    .then(user=> res.json(user))
    .catch(error=>{
        console.error(error);
        res.status(error.status || 500).json({message: error.message});
    });
}

module.exports ={
    getCurrentUser,
};