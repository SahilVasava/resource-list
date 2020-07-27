const JWT = require('jsonwebtoken');



module.exports = {
    // Sign and generate JWT token
    signToken: async user => {
        return JWT.sign({
            iss: process.env.APP_NAME,
            sub: user.id,
            iat: new Date().getTime(), // Current time
            exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
        }, process.env.JWT_SECRET);
    },
}