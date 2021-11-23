const { Schema, model } = require('mongoose'); //definiendo el esquema y el modelo

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
    
    
        password:{
            type:String,
            required:true,
            unique:true,
            trim:true
        }

    },
    {
        versionKey: false, 
        timestamps: true  //guarda la fecha de creacion y la fecha de actualizacion
    });

module.exports = model('User', userSchema);