const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: false}));

// Rutas
const misRutas = require('./routes/rutas.js');
const miForma = require('./routes/rutaForm.js');

// Modulos 
app.use('/ruta-forms', miForma);
app.use('/imagenes', misRutas);

//Root  
app.use('/',(req,res));


// 404
app.use((req,res));


//App listen
app.listen(PORT);
console.log(`listening on ${PORT}`);