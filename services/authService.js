const jwt  = require ("jsonwebtoken");

const JWT_SECRET ="MIIBOgIBAAJBALdKC5FLJ+As6jGshHUfCaQ/V7r+MNdnd9mP7in9ZblaZNff9MlYzs9zcpyBrXTAb++wt5DCQZBDPxJ0YZprnY0CAwEAAQJAejP9GGcic/2eO3ZJbgk+lWrCJGN7zvImX0DuSsKvAu+W0TJurEkMDK6SQjac8Hh/AqHwSDMpeTsPApGHfoLWQQIhAOzkgS8wC6AY1Zhx5m+406TAHSARh3SVGVPLgbm+b9Y9AiEAxhK1GhoUVSeMDbUe6qlonFISyuU3i428ZjJi3mqJqZECIQDBJBjzmS+RS04y6YKgyke8hmn4sHIJKlspB75v64WRXQIgfZLsqBCypU3+N86FPEaM4NYTvfhWH66LK8tz7QhkIFECIEx14OSBKVIvBf6/mpfngAP0o8/pG2iMSfK3KY7Shjwd";

function generateToken( user){
    const payload = {
        userId: user._id,
        email: user.email,
    
    };
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "1h"});
    return token
}

module.exports= {
    generateToken
}
