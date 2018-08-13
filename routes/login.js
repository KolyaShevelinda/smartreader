const router = require('express').Router();
const accountsCtrl = require('../controllers/accounts');

router.get('/', function (req, res) {
    res.render('login');
});


router.post('/', accountsCtrl.login);

module.exports = router;