const router = require('express').Router();
const accountsCtrl = require('../controllers/accounts');


router.get('/', function (req, res) {
    res.render('accounts');
});

router.get('/all', accountsCtrl.getAll);

router.get('/:id', accountsCtrl.getOneById);

router.post('/create', accountsCtrl.createAccount);


module.exports = router;