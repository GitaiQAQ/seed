var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'API'
    });
});

router.use('/v1', require('./v1'));
module.exports = router;
