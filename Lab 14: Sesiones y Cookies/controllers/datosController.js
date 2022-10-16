const Modelo = require('../models/datosModelo')

getDatos = (req,res) => {
    res.render('forma.ejs')
};

postDatos = (request, response, next) =>{
    // Here it goes the code for POST form
    Modelo.save(request.body)
    response.status(403).redirect('/')
};

module.exports = {
    postDatos,
    getDatos,
}