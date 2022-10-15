const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

// Rutas
const misRutas = require('./routes/rutas.js');


// Middleware

// {
   
// La aplicación debe poder responder al menos a 5 rutas diferentes, 
// distribuidas en al menos 2 módulos, 
//y mandar una respuesta HTTP 404 cuando la ruta no existe.

// En alguna de las rutas, la aplicación debe contener al menos 1 forma que debe enviar datos al servidor por POST.

// El servidor debe reaccionar ante este envío y guardar los datos en un archivo de texto dentro del mismo servidor.
// }

app.use('/ruta-forms', (request, response, next) => {
    console.log(request.body);
    
    response.send('Esto es alguna-ruta')
});

app.use('/modulo', misRutas);

app.use('/',(req, res, next) => {
    console.log('Otro Middleware!');
    res.setHeader("Content-Type", "text-html")
    res.write('<a href="/modulo/ruta">Vamos a una forma!</a>')
    res.write('<br>')
    res.write('<a href="/imagenes/perritos">¿Quieres ver perritos?</a>')
    res.write('<br>')
    
    res.write('Hola mundo!'); // Manda la respuesta
    muchaForma = fs.readFileSync('./DatosDeLaForma.txt')
    res.write('<br>')
    res.end(muchaForma)
});

app.listen(PORT);
console.log(`App listening in ${PORT}`)
