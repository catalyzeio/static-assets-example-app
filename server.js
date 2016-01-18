var express = require('express'),
    static  = require('express-static');

var app = express();
app.disable('x-powered-by');
app.use(static(__dirname + '/dist'));

var port = process.env.PORT | 8080;
var server = app.listen(port, function() {
    console.log('static content server listening on port %s', port);
});
