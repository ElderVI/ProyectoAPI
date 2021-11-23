const express = require('express');
const cors = require('cors');

const app = express();

// settings sirve para configurar el servidor
app.set('port', process.env.PORT || 6000);

// middlewares me permite definir funciones antes de que lleguen a las rutas 
app.use(cors());
app.use(express.json());

// rutas 

app.use('/api/users', require('./routes/users'));

module.exports = app;
