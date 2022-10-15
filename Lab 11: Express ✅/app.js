const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

// Rutas
const misRutas = require('./routes/rutas.js');
const miForma = require('./routes/rutaForm.js');

// Middleware

// {
   
// La aplicación debe poder responder al menos a 5 rutas diferentes, 
// distribuidas en al menos 2 módulos, 
//y mandar una respuesta HTTP 404 cuando la ruta no existe.

// En alguna de las rutas, la aplicación debe contener al menos 1 forma que debe enviar datos al servidor por POST.

// El servidor debe reaccionar ante este envío y guardar los datos en un archivo de texto dentro del mismo servidor.
// }

app.use('/ruta-forms', miForma);

app.use('/imagenes', misRutas);



// app.use((req,res) => {
//     res.setHeader('Contente-Type','text/json')
//     res.status(404).write(JSON.stringify({message:'Error 404 | Pagina no encontrada'}))
//     res.end('<br><a href="/">Regresar</a>')
// });



app.use('/',(req, res, next) => {
    console.log('Otro Middleware!');
    res.setHeader("Content-Type", "text-html")
    res.write('<a href="/ruta-forms/ruta">Vamos a una forma!</a>')
    res.write('<br>')
    res.write('<a href="/ruta-forms/vistaSecreta">Es un secreto. NO INGRESAR.</a>')
    res.write('<br>')
    res.write('<a href="/imagenes/perritos">¿Quieres ver perritos?</a>')
    res.write('<br>')
    res.write('<a href="/imagenes/abejas">Apicultores</a>')
    res.write('<br>')
    res.write('<a href="https://www.tec.mx">Ir a la página del TEC</a>')
    res.write('<br>')
    
    res.write('Hola mundo!'); // Manda la respuesta

    muchaForma = fs.readFileSync('./DatosDeLaForma.txt',null,' ')
    res.write('<br>')
    res.write('los datos presentados se actualizan segun la forma')
    res.write('<br>')
    res.write('<br>')
    res.end(muchaForma)
});

app.use((request, response, next) => {
    response.status(404);
    response.write('<h1>Error 404: El recurso solicitado no existe</h1>'); //Manda la respuesta
    response.end('<br><a href="/">Regresar</a>')
});


app.listen(PORT);
console.log(`App listening in ${PORT}`)
