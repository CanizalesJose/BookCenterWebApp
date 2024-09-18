const express = require('express');
const app = express();
const path = require('path');

// Importar las rutas
const appRoutes = require('./routes/appRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Configurar el motor de vistas (en este caso EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, JS, imágenes) desde la carpeta 'public'
app.use(express.static('public'));

// Usar las rutas para la aplicación web
app.use('/', appRoutes);
// Usar las rutas para las peticiones a la API
app.use('/api', apiRoutes);
// Usar una ruta por defecto cuando hayan errores
app.use((req, res, next) => {
  res.status(404).render("404", {activePage:''});
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
