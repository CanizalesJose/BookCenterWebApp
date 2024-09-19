const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Ruta para hacer una petición HTTP a la API externa
router.get('/data', apiController.getDataFromAPI);

router.post('/login', apiController.loginUser);

router.post('/register', apiController.registerUser);

module.exports = router;
