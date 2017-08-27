var fs = require('fs');
var compression = require('compression');
var express = require('express');
var reload = require('reload');

var app = express();

app.set('port', process.env.PORT || 8008 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'TIMETRAVEL';

app.use(express.static('app/public', { maxAge: 864000000} ));
app.use(require('./routes/pages'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

server.timeout = 15000;

reload(server, app);
