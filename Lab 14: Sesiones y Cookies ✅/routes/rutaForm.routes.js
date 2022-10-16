const express = require('express');
const router = express.Router();
const fs = require('fs');
const datosController = require('../controllers/datosController')

router.get('/datos', datosController.getDatos)


router.post('/datos', datosController.postDatos);



module.exports = router;