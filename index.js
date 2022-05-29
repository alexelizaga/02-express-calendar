const express = require('express');

const app = express();

app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});