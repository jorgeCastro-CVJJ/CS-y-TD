const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// Sesion
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
    cookie: {maxAge: 300, encode:true}
}));


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