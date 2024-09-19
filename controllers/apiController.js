const bcrypt = require('bcryptjs');
const axios = require('axios');

exports.getDataFromAPI = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/users/');

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    console.log(`${req.method} on route /api/${req.path}`);
    const {loginUsername, loginPassword} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(loginPassword, salt);

    const response = await axios.post('http://localhost:5000/api/users/login',{
      loginUsername: loginUsername,
      hashedPassword: hashedPassword
    });

    res.redirect('/');
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.registerUser = async (req, res) => {
  try {
    console.log(`${req.method} on route /api/${req.path}`);
    const {newUsername, newPassword, newUsertype} = req.body;

    const salt = await bcrypt.genSalt(10);
    const newhashedPassword = await bcrypt.hash(newPassword ,salt);

    const response = await axios.post('http://localhost:5000/api/users/register', {
      newUsername: newUsername,
      newhashedPassword: newhashedPassword,
      newUsertype: newUsertype
    });
    console.log(response);

    res.redirect('/');
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};