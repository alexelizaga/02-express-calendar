const express = require('express');

const { dbConnection } = require('./database/config');

const PORT = process.env.PORT || 4000;

const app = express();

// Data base connection
dbConnection();

// Public directory
app.use( express.static('public') );

// Read and Parse JSON
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') );

// Listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});