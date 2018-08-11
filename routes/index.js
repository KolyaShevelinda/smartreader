const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});


module.exports = router;