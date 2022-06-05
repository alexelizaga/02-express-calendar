const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect( process.env.DB_CNN );

        console.log('DB is connected');

    } catch(error) {
        console.log(error);
        throw new Error('database connection failed')
    }

}

module.exports = {
    dbConnection
}