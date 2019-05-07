var express = require('express');
var app = express();

app.use(function (req, res) {
  res.send('{ success: true }');
});

app.listen(9500, function () {
  console.log('Example app listening on port 9500!');
});
