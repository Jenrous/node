const mongoose = require ("mongoose");
const bcryptService = require("../services/bcryptService");

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true, // nombre obligatorio
    },
    edad: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, //debe ser unico no parecido a ninguno otro 
    },
    contraseña: {
        type: String,
        required: true,
    },

    });


//  antes de guardar el usuario, es decir jennifer, se hashea la contrasena.
userSchema.pre("save", function (next) {
    if (!this.isModified("contraseña")) {
      return next();
    }
    bcryptService
      .hashPassword(this.contraseña)
      .then((hashedPassword) => {
        this.contraseña = hashedPassword;
        next()
      })
      .catch((error) => {
        console.error(error);
        next(error)
      });
  });




// se crea el moduloo user, utilizado el esquema definido anteriormmente, es decir la interface, los camops obligatorios.
const User= mongoose.model("User", userSchema)




// se exporta el modulo user para usarlo en cualquier parte
module.exports = User;