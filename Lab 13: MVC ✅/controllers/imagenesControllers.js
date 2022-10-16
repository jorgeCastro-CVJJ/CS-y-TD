
getPerritos = (req,res) => {
    res.render('perritos.ejs')
};


getApicultura = (req,res) => {
    res.render('apicultura.ejs')
};

module.exports = {
    getPerritos,
    getApicultura,
}