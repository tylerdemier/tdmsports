/**
 * @name ROUTES
 * @desc Define las ruta dle proyecto.
 */

module.exports = (app, passport) => {
    /**
     * @desc Route for the index view.
     */
    app.get('/', (req, res) => {
        res.render('index');
    });

    /**
     * @desc Route for the login view.
     */
    app.get('/login', (req, res) => {
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /**
     * @desc Route for the signup view.
     */
    app.get('/signup', (req, res) => {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    /**
     * @todo Cambiar el profile por el main.
     * @desc Route for the profile view.
     */
    app.get('/profile', (req, res) =>{
        res.render('profile', {
            user: req.user
        });
    });

    /**
     * @desc Route for the logout function.
     */
    app.get('/logout', function(req, res, next) {
        req.logout(function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    });
};