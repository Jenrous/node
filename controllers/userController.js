// importo el  modelo de mongodb ques el archivo users questa dentro de la carepta models.

const User = require ("../models/users");
const bcryptService = require ("../services/bcryptService");

// empezamos con el CRUD, se llama a todos los usuarios.

function getAllUsers(req, res){
    User.find() //find() es un metodo que sirve para encontrar todos los usuarios, recuerda rocio ;| lo que vimos en javascript de los metodos
    .then((users)=>res.status(200).json(users)) // envia usuarios como respuesta
    .catch((err)=>{ // agarra el error
        console.error(err);
         res.status(500).send("Error al obtener usuarios")// envia mensaje a jennifer que no encuentra el usario.
      
    })
}

// funcion para crear un nuevo usuario.

function createUser(req, res){
    const { nombre, edad, email, contraseña}= req.body // extrae toda la infoormacion que lleno jennifer
    User.create({ nombre, edad, email, contraseña}) // se crea un nuevo usuario con el metodo create(). a lo que creas el usuario con todo el formulario.
    .then((newUser)=> res.status (201).json(newUser))// por atras se sube la informacion del formulario creado como json
    .catch((err)=> {
        console.error(err);
        res.status(500).send("Error al crear Usuario");
    });
}

// CRUD  update actualizar usuario

function updateUser(req, res){
    const userid = req.params.id
    const updateUser = req.body
// el metodo findByIdAndUpdate(), busca especamente por Id de los usuarios creados en la base de datos
    User.findByIdAndUpdate(userid, updateUser,{new:true}) //los metodos dentro son: 1 actualiza el usuario, 2 actualiza los datos del formulario y el 3 es la confirmacion del usario nuevo.
    .then ((user)=>res.status(200).json(user))
    .catch((err)=>{
        console.error(err);
        res.status(500).send("Error al actualizar el usuario");
    });
}

// CRUD delete
function deleteUser(req,res) {
    const userId= req.params.id;
    User.findByIdAndDelete(userId)// este metodo es comel update
    .then(()=> res.status(200).send ("Usuario eliminado correctamente"))
    .catch((err)=>{
        console.error(err);
        res.status(500).send ("Error al eliminar el usuario");
    });
}

// se exporta todo el crud para usarlo en los otros modulos

module.exports ={
    createUser,
    deleteUser,
    getAllUsers,
    updateUser
}


//Acuérdate Rocío, este es el CRUD ;)
// post crea un nuevo usuario en la ruta  http://localhost:3000/api/users
// get trae todos los usuarios
//put actualiza
// delete elimina