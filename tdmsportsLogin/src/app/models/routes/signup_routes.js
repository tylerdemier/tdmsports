/**
 * @name LOGIN_ROUTES
 * @desc Define la ruta login del proyecto.
 */

const express = require('express');

const router = express.Router();
const signup_controller = require('../controllers/signup_controller');

router.get('/signup', signup_controller.signup_page);
router.post('/signup', signup_controller.signup_user);

module.exports = router;