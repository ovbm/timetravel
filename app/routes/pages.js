// required imports for routing module
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    pageTitle: 'Home',
    pageID: 'home'
  });
});

// exports the router object
module.exports = router;
