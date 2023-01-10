/**
 * @name INDEX_ROUTES
 * @desc Define la ruta index del proyecto.
 */

const express = require('express');

const router = express.Router();
const index_controller = require('../controllers/index_controller');

router.get('/', index_controller.index_page);
router.get('/index', index_controller.index_main);

module.exports = router;