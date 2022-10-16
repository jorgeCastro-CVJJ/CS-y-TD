const express = require('express');
const router = express.Router();

router.get('/perritos',(req,res) => {
    res.render('perritos.ejs')
})

router.get('/apicultura',(req,res) => {
    res.render('apicultura.ejs')
})

module.exports = router;