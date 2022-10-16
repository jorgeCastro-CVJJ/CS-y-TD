const express = require('express');
const router = express.Router();
const imagenesControllers = require('../controllers/imagenesControllers')

router.get('/perritos',imagenesControllers.getPerritos)



router.get('/apicultura',imagenesControllers.getApicultura)

module.exports = router;