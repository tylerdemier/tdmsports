/**
 * @name SIGNUP_ROUTES
 * @desc Define la ruta sing up del proyecto.
 */

const express = require("express");
const request = require("request");

module.exports = (app, passport) => {

    /**
     * @desc Route for the signup view.
     */
    app.get('/signup', (req, res) => {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/index',
        failureRedirect: '/signup',
        failureFlash: true
    }));
}