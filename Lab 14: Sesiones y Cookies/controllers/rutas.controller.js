const Modelo = require('../models/datosModelo')
const session = require('express-session');

getCreativo = (req,res) => {
    res.render('creativo.ejs')
};

getDatos = (request,res) => {
    console.log(request.session)
    data = Modelo.read()
    let info = JSON.parse(data);
    res.render('index.ejs',{
        nombre: info.nombre,
        correo: info.correo,
    })
}



module.exports = {
    getCreativo,
    getDatos
}