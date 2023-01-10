/**
 * @name LOGIN_ROUTES
 * @desc Define la ruta login del proyecto.
 */

const express = require('express');

const router = express.Router();
const login_controller = require('../controllers/login_controller');

router.get('/login', login_controller.login_page);
router.post('/login', login_controller.login_user);

module.exports = router;