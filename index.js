const express = require('express');

const app = express();

// Public directory
app.use( express.static('public') );

// Read and Parse JSON
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') );

// Listen for requests
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});