const express = require('express');
const app = express();

/**
 * @module path - Permite manejar las rutas.
 * @module mongoose - Permite conectarse a MongoDB.
 * @module passport - Permite configurar la manera de autenticarse.
 * @module flash - Permite mandar mensajes al usuario.
 * @module morgan - Permite definir los métodos HTTP que llegan del servidor y mostrarlos en consola.
 * @module cookieParser - Permite el uso de cookies.
 * @module bodyParser - Permite convertir el cuerpo de la información.
 * @module session - Permite manejar las sesiones a través de Express.
 */
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')


const {url} = require('./config/database.js');
mongoose.connect(url, {});

require('./config/passport')(passport);

/**
 * @name Settings
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * @name Middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser('TDM_Sports_Login'));
app.use(session({
    secret: 'TDM_Sports_Login',
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



/**
 * @name Routes
 */
require('./app/routes.js')(app, passport);

/**
 * @name Static Files
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * @desc Arranca el servidor
 */
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});