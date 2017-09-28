var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

var gifRouter = require('./routes/gifs');

app.use(express.static('public'));

app.use('/gifs', gifRouter);

// this MUST be the last route
// only for removing the #! and allowing the refresh to function
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function () {
    console.log('on 3003');
});