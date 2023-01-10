/**
 * @name LOGIN_ROUTES
 * @desc Define la ruta login del proyecto.
 */

const express = require("express");
const request = require("request");

module.exports = (app, passport) => {

    /**
     * @desc Route for the login view.
     */
    app.get('/login', (req, res) => {
        res.render('login', {
            messages: req.flash('error')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/index',
        failureRedirect: '/login',
        failureFlash: true
    }));
}