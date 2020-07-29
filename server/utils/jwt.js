const JWT = require('jsonwebtoken');



module.exports = {
    // Sign and generate JWT token
    signToken: async user => {
        let iat = new Date().getTime();
        let exp = new Date().setDate(new Date().getDate() + 1);
        // let exp = iat + 30000;
        let token = await JWT.sign({
            iss: process.env.APP_NAME,
            sub: user.id,
            iat, // Current time
            exp  // current time + 1 day ahead
        }, process.env.JWT_SECRET);
        return { token, exp };
    },
}