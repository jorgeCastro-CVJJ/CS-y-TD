const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// Rutas
const misRutas = require('./routes/rutas.routes');
const miForma = require('./routes/rutaForm.routes');
const imagenes = require('./routes/imagenes.routes');



// Modulos 
app.use('/ruta-forms', miForma);
app.use('/imagenes', imagenes);
app.use('/index', misRutas);




//Root  
app.use('/',(req,response) => {
    response.redirect('/index')
});

// 404
app.use((request, response, next) => {
    response.status(404);
    response.write('<h1>Error 404: El recurso solicitado no existe</h1>'); //Manda la respuesta
    response.end('<br><a href="/">Regresar</a>')
});



//App listen
app.listen(PORT);
console.log(`listening on ${PORT}`);