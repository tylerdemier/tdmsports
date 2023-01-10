/**
 * @name USER
 * @desc Define la estructura que va a tener el usuario en la base de datos.
 */

/**
 * @module mongoose - Permite conectarse a MongoDB.
 * @module bcrypt - Permite encriptar la contraseña.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const user_schema = new mongoose.Schema({
    local: {
        email: String,
        password: String
    }
});

/**
 * @function generateHash
 * @param {String} password
 * @return {String} bcrypt.hashSync()
 * @description Encripta la contraseña recibida
 */
user_schema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(3), null);
};

/**
 * @function validatePassword
 * @param {String} password
 * @return {String} bcrypt.compareSync()
 * @description Compara la contraseña recibida y si es válida.
 */
user_schema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

/**
 * @desc Crea el modelo de usuario y lo expone a la app.
 */
const User = mongoose.model('User', user_schema);
module.exports = User;