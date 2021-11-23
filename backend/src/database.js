const mongoose = require('mongoose'); 

const URI = process.env.MONGOOSE_URI       //valida que exista la base de datos
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/Usuariodatabase';

mongoose.connect(URI, {
    useNewUrlParser: true, //para que mongoose pueda conectarse 
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {             //cuando se abre la conexion
    console.log('Database is connected');
});
