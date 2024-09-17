// apiController.js

const axios = require('axios');

exports.getDataFromAPI = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api'); // Reemplaza con la URL de tu API
    res.json(response.data); // Enviar los datos al cliente
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
};
