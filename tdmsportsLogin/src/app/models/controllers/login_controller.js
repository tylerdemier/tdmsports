/**
 * @name LOGIN_CONTROLLER
 * @desc El controller de login_routes.
 */

const passport = require('passport');

const login_user = (req, res, next) => {
    passport.authenticate('local-login', {
        successRedirect: '/index',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
};

const login_page = (req, res) => {
    res.render('login', {
        messages: req.flash('error')
    });
};

module.exports = {
    login_user,
    login_page
};