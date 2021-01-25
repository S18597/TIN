var express = require('express');
var router = express.Router();

router.get('/form', (request, response) => {
  response.render('form');
});

module.exports = router;