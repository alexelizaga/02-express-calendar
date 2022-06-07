const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

// Data base connection
dbConnection();

// CORS
app.use(cors());

// Public directory
app.use( express.static('public') );

// Read and Parse JSON
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') );

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${ process.env.PORT }`);
});