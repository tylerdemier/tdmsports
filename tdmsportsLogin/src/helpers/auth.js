/**
 * @name AUTH
 * @desc Middleware para autenticar si el usuario esta iniciado sesión.
 */

const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = helpers;