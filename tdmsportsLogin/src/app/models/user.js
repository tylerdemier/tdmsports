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

/* @todo Decidir más datos de usuario. */
const userSchema = new mongoose.Schema({
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
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(3), null);
};

/**
 * @function validatePassword
 * @param {String} password
 * @return {String} bcrypt.compareSync()
 * @description Compara la contraseña recibida y si es válida.
 */
userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

/**
 * @desc Crea el modelo de usuario y lo expone a la app.
 * */
module.exports = mongoose.model('User', userSchema);