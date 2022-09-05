const express = require('express');
const app = express();
const PORT = 3000;


// Middleware

app.use((req, res, next) => {
    console.log('Middleware!');
    next(); // Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((req, res, next) => {
    console.log('Otro Middleware!');
    res.send('Hola mundo!'); // Manda la respuesta
});

app.listen(PORT);
