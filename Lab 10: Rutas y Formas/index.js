const http = require('http');
const fs = require('fs');
/*
    Escribe, prueba y ejecuta con node, scripts de js para los siguientes ejercicios y problemas. Muestra los resultados en consola:

    Una función que reciba un arreglo de números y devuelva su promedio.
    Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
    Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.

*/
//====================================================================================
const arreglado = [20, 50, 100, 200];

function promedio(arreglo) {
    let suma = 0, cont = 0;
    
    for(let i of arreglo){
        suma += i;
        cont += 1;
    }
    return suma / cont;
}

//====================================================================================
const cadena = "Esto es un texto que se escribio a un archivo mediante NodeJS";
function escribirEnArchivo(string) {
    fs.writeFileSync("./funcionEscribirEnArchivo.txt", string)
}
//====================================================================================
function showTextFromFile() {
    return fs.readFileSync("./archivoParaCargar.txt");
    
} 
//====================================================================================
// INICIO  DEL SERVIDOR // 
const video = showTextFromFile();
const average = promedio(arreglado);
const server = http.createServer((req, res) => {
    
    if (req.method === "GET" && req.url === "/prueba_rutas") {
        res.setHeader("Content-Type", "text/html");
        res.write(`Respuesta a promedio de arreglo, donde el arreglo es: [${arreglado}] y el promedio es: ${average}`);
        res.write("<br><hr>");
        escribirEnArchivo(cadena);
        res.write(`Revisar el archivo que se creo en la computadora llamado 'funcionEscribirEnArchivo'. el string utilizado fue: ${cadena}`);
        res.write("<br><hr>");
        res.write(video);
        res.end();

    } else if (req.method === "GET" && req.url === "/ruta1") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is a Header</h1>");
        res.write("<br><hr>");
        res.write("<p>");
        res.write("This a paragraph, where you can add some text or hiperlinks to express yourself");
        res.write("</p>");
        res.write("<strong>BTW, you made it to Ruta 1!!!!</strong>");
        res.end();
        
    } else if (req.method === "GET" && req.url === "/posteo_info") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is a POST router</h1>");
        res.write("<br><hr>");
        res.write("<form><label>Label</label><input type='text''> </input></form>")
        res.end()
    } else {
        var ip = req.socket.remoteAddress;
        ip = ip.split(':').slice(-1); 
        fs.appendFileSync('./log_web.log',`\n${req.method} 404 Not Found ${req.url} | IP: ${ip}`);
        
        res.writeHead(404,{'Content-Type': 'text/html' });
        res.write("404 | Page Not Found","utf-8");
        res.write("<br><hr>")
        res.end(`<strong>BTW, this is your IP: ${ip}</strong>`);
    }
    


});

server.listen(3000);
console.log('El servidor esta levantado en el puerto 3000')