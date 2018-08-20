var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/regProduct', function(req, res, next) {
    res.render('regProduct');
});

router.get('/regProduct2', function(req, res, next) {
    res.render('regProduct2');
});

router.get('/viewProduct', function(req, res, next) {
    res.render('viewProduct');
});

router.get('/camera', function(req, res, next) {
    res.render('camera');
});

router.get('/search', function(req, res, next) {
    res.render('search');
});

module.exports = router;
