const Modelo = require('../models/datosModelo')

getCreativo = (req,res) => {
    res.render('creativo.ejs')
};

getDatos = (req,res) => {
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