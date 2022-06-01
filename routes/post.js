var express = require('express');
var router = express.Router();

router.get("/post", function(req, res, next) {
  res.render("Connected to React!");
});

module.exports = router;
