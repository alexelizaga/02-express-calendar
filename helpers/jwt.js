const jwt = require('jsonwebtoken');

const generateJWT = ( uid, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid, name };

        jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        }, (err, token) => {
            if (err) {
                reject(err);
            };
            resolve(token);
        });

    });
}

module.exports = {
    generateJWT
}