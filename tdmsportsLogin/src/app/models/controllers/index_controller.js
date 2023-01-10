/**
 * @name INDEX_CONTROLLER
 * @desc El controller de index_routes.
 */

const index_page = (req, res, next) => {
    res.render('index');
};

const index_main = (req, res) => {
    res.redirect('http://127.0.0.1:5000/');
};

module.exports = {
    index_page,
    index_main
};