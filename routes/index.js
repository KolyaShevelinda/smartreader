const router = require('express').Router();
const connection = require('../db/index');

router.get('/', function (req, res) {
    res.render('index');
});


module.exports = router;