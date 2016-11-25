var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(gzippo.staticGzip("" + __dirname + "/app"));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
console.log('Application is running on port 5000 ');
app.listen(process.env.PORT || 5000);