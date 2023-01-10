const passport = require('passport')

const signup_user = (req, res, next) => {
    passport.authenticate('local-signup', {
        successRedirect: '/index',
        failureRedirect: '/signup',
        failureFlash: true
    })(req, res, next);
};

const signup_page = (req, res) => {
    res.render('signup', {
        messages: req.flash('error')
    });
};

module.exports = {
    signup_user,
    signup_page
};