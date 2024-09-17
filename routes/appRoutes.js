const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

// Ruta para servir la página principal
router.get('/', appController.renderHomePage);

router.get('/login', appController.renderLogin);

module.exports = router;
