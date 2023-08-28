// var cors = require('cors');
var express = require('express');

var app = express();


// app.use(cors({ origin: 'https://trello.com' }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
