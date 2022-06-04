const mongoose = require('mongoose');

const DB_CNN = process.env.DB_CNN || 'mongodb+srv://calendar_user:KCh1XmBpvGYaW6mL@cluster0.gfks0su.mongodb.net/calendar';

const dbConnection = async () => {

    try {

        await mongoose.connect( DB_CNN );

        console.log('DB is connected');

    } catch(error) {
        console.log(error);
        throw new Error('database connection failed')
    }

}

module.exports = {
    dbConnection
}