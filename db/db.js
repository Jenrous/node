// Se importa mongoose para crear la conexion a la base de datos de mongodb, el use require es obligatorio en todo los modelos.
const mongoose = require("mongoose")
// Mediante este metodo connect() se conecta a mongoose.
const mongoDBURL = "mongodb+srv://jenrous26:wjZkNvV9dyMOSVM1@cluster0.zlvgvai.mongodb.net/node";

function connectDB (){
    return new Promise((res, rej )=> {
        mongoose
        .connect(mongoDBURL)
        .then(()=>{
            console.log("Conexion a la base de datos establecida correctamente");
            res();
            })
            .catch((err)=>{
                console.error("Error al conectar a la base de datos ", err);
                rej(err);
            });
    });
}

// se exporta en el modelo la funcion que conecta a la base de datos, para poder usarla en la app.js.

module.exports = connectDB;