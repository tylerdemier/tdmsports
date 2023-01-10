/**
 * @name ROUTES
 * @desc Define la ruta index del proyecto.
 */

const express = require("express");
const request = require("request");
const {isAuthenticated} = require("../../../helpers/auth");

module.exports = (app, passport) => {
    /**
     * @desc Route for the index view.
     */
    app.get('/', (req, res) => {
        res.render('index');
    });

    /**
     * @desc Route for the Flask() view.
     */
    app.get('/index', isAuthenticated, function (req, res) {
        res.redirect('http://127.0.0.1:5000/');
    });


    /**
     * @desc Route for the logout function.
     */
    app.get('/logout', function (req, res, next) {
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    });
};