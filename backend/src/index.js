require('dotenv').config(); //utilizando dotenv para la variable de entorno
const app = require('./app');
require('./database'); //base de datos conectada

async function main() {
    await app.listen(app.get('port'));  //utiliza el valor de port desde app.js
    console.log('Server on port', app.get('port'));
}

main();