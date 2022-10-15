const express = require('express');
const fs = require('fs')
const router = express.Router();

router.get('/ruta', (request, response, next) => {
    response.setHeader("Content-Type", "text/html")
    response.write('<h1>Forma Lab 11 </h1>')
    response.write('<br>')
    response.write('<form action"/" method="POST">')    
    response.write('<label>Nombre</label>')
    response.write('<br><input  placeholder="Miguel Cervantes" name="nombre">')
    response.write('<br><label>Correo</label>')
    response.write('<br><input type="email" name="correo" placeholder="mcervantes@gmail.com">')
    response.write('<br> <button type="submit" value="Submit"> Enviar </button>  <button type="reset" value="Reset"> Limpiar Todo</button>')
    response.write('</form>')
    
    response.end(); 
});

router.post('/ruta', (request, response, next) =>{
    // Here it goes the code for POST form
    console.log(request.body)
    fs.writeFileSync("DatosDelaForma.txt", JSON.stringify(request.body,null,2))
    response.status(403).redirect('/')
})

module.exports = router;