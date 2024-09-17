const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Ruta para hacer una petición HTTP a la API externa
router.get('/data', apiController.getDataFromAPI);

module.exports = router;
