/**
 * @name PASSPORT
 * @desc Define la configuración del registro e inicio de sesión.
 */

/**
 * @module localStrategy - Permite gestionar las formas de registrarse.
 */
const LocalStrategy = require('passport-local').Strategy;

const User = require('../app/models/user');

module.exports = function(passport){
    /**
     * @desc Serializar los usuarios.
     */
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    /**
     * @desc Deserializar los usuarios.
     */
    passport.deserializeUser(function (id, done) {
       User.findById(id, function (err, user) {
           done(err, user);
       })
    });

    /**
     * @todo Alterar al añadir más campos al usuario.
     * @desc Configuración del registro.
     */
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done){
        User.findOne({'local.email': email}, function (error, user) {
            if (error){
                return done(error);
            }
            if (user){
                return done(null, false, req.flash('signupMessage', 'The email is already in use.'));
            } else {
                var newUser = new User();
                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.save(function (err) {
                    if (err){
                        throw err;
                    }
                    return done(null, newUser);
                });
            }
        });
        }));

    /**
     * @desc Configuración de inicio de sesión.
     */
    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done){
            User.findOne({'local.email': email}, function (err, user) {
                if (err){
                    return done(err);
                }
                if (!user){
                    return done(null, false, req.flash('loginMessage', 'The user does not exist.'));
                }
                if (!user.validatePassword(password)){
                    return done(null, false, req.flash('loginMessage', 'The password is incorrect.'))
                }
                return done(null, user);
            });
        }));
}

