const express = require('express');
require('dotenv').config();

console.log( process.env );

const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.json({
//         ok: true
//     });
// });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});