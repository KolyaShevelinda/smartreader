const router = require('express').Router();
const DocumentsCtrl = require('../controllers/documents');

router.get('/', function (req, res) {
    res.render('documents');
});

router.get('/all', DocumentsCtrl.getAll);

module.exports = router;