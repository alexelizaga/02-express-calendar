const jwt = require('jsonwebtoken');

const generateJWT = ( uid, name ) => {
    const token = jwt.sign({
        uid,
        name
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    });

    return new Promise( (resolve, reject) => {

        const payload = { uid, name };

        jwt.sign( payload, process.env.JWT_SECRET, {})
    });
}

module.exports = {
    generateJWT
}