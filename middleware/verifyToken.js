const jwt = require("jsonwebtoken");

function verifyToken(req, res, next){
return new Promise((resolve, reject)=>{
    const token = req.headers.authorization;

    if(!token){
        reject({status:401, message: "Token de autenticacion no proporcionado"})
    }

    jwt.verify(token.split(" ")[1],
    "MIIBOgIBAAJBALdKC5FLJ+As6jGshHUfCaQ/V7r+MNdnd9mP7in9ZblaZNff9MlYzs9zcpyBrXTAb++wt5DCQZBDPxJ0YZprnY0CAwEAAQJAejP9GGcic/2eO3ZJbgk+lWrCJGN7zvImX0DuSsKvAu+W0TJurEkMDK6SQjac8Hh/AqHwSDMpeTsPApGHfoLWQQIhAOzkgS8wC6AY1Zhx5m+406TAHSARh3SVGVPLgbm+b9Y9AiEAxhK1GhoUVSeMDbUe6qlonFISyuU3i428ZjJi3mqJqZECIQDBJBjzmS+RS04y6YKgyke8hmn4sHIJKlspB75v64WRXQIgfZLsqBCypU3+N86FPEaM4NYTvfhWH66LK8tz7QhkIFECIEx14OSBKVIvBf6/mpfngAP0o8/pG2iMSfK3KY7Shjwd",
    (error, decodedToken)=>{
        if (error){
            reject({status: 401, message: "Token de atenticación no válido"});

        }else{
            req.userId = decodedToken.userId; // esto lo que dice es que es el ID del usuario, en este caso jennifer  decodificado para usarlo despues.
            resolve()
        }
    })
})
.then (()=> next())// seguimiento del sigueinte middleware  o siguiente controlador
.catch((error)=> res.status(error.status||500).json({message: error.message}))
}
module.exports = verifyToken;