const router = require('express').Router();
const connection = require('../db/index');

router.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});


module.exports = router;