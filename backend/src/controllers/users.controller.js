const userCtrl = {};

const User = require('../models/User'); //importa las caracteristicas de los usuarios, propiedades

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find(); //consulta todo los datos almacenados
        res.json(users);            //devuelve los datos
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const { username ,password} = req.body; //datos que envia el usuario

        const newUser = new User({ username ,password}); //creando un nuevo usuario
        await newUser.save();                               //se almacena
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;              //id para eliminar
    await User.findByIdAndDelete(id);       //se elimina el usuario
    res.json('User deleted');
}

userCtrl.updateUser = async (req, res) => {
    const { username, password } = req.body;          //datos para actualizar
    await User.findByIdAndUpdate(req.params.id, {       //se actualiza mediante el id
        username,
        password
    });
    res.json('Usuario Updated');
}

userCtrl.getUser=async (req, res)=>{
const username = await User.findById(req.params.id);
res.json(username)

}

module.exports = userCtrl;