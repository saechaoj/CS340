var path = require('path');
var express = require('express');
var app = express();
var mysql = require('./dbcon.js');
var port = 3001;


app.use('/', express.static(__dirname));
app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'public/index.html'));
    res.sendfile(path.resolve(__dirname, 'inventory.html'));
    res.sendfile(path.resolve(__dirname, 'storeInfo.html'));
});


app.listen(port, () => {
    console.log('Server running on port ' + port);
});
