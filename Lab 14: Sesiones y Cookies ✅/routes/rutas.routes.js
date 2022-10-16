const { info } = require('console');
const express = require('express');
const router = express.Router();
const rutasController = require('../controllers/rutas.controller')


router.get('/creativo',rutasController.getCreativo)

router.get('/',rutasController.getDatos)

module.exports = router;