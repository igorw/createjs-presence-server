var express = require('express'),
    app = express.createServer();
    entities = {};

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'x-requested-with');
    res.header('Access-Control-Request-Method', 'GET,POST');
    next();
});

app.use(express.logger());
app.use(express.bodyParser());

app.get('/', function(req, res) {
    res.send('createjs-presence-server');
});

app.get('/presence', function(req, res) {
    var id = req.param('id');

    if (!id) {
        res.send('No entity id given.\n', 400);
        return;
    }

    res.send(entities[id] ? '1' : '0');
});

app.post('/presence', function(req, res) {
    var id = req.param('id'),
        state = req.param('state');

    if (!id) {
        res.send('No entity id given.\n', 400);
        return;
    }

    if (state) {
        entities[id] = true;
    } else {
        delete entities[id];
    }

    res.send('-');
});

app.listen(1337);
