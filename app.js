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

app.post('/editing_entity', function(req, res) {
    var id = req.param('id');

    if (!id) {
        res.send('No entity id given.\n', 400);
        return;
    }

    entities[id] = true;

    res.send('-');
});

app.post('/done_editing_entity', function(req, res) {
    var id = req.param('id');

    if (!id) {
        res.send('No entity id given.\n', 400);
        return;
    }

    delete entities[id];

    res.send('-');
});

app.get('/status', function(req, res) {
    var id = req.param('id');

    if (!id) {
        res.send('No entity id given.\n', 400);
        return;
    }

    res.send(entities[id] ? 'true' : 'false');
});

app.listen(1337);
