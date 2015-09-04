var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  var n = parseInt(req.query.n) * 1000000;
  for ( var i = 0 ; i < n ; i++ ) {
  }
  res.send('Hello world '+n+' iterations...');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
