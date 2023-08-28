// var cors = require('cors');
var express = require('express');

var app = express();


// app.use(cors({ origin: 'https://trello.com' }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
