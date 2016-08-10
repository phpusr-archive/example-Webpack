var statServer = require('node-static');
var file = new statServer.Server('./public');

require('http').createServer(function (request, response) {
    console.log('request.url:', request.url);

    if (!/\./.test(request.url)) {
        request.url = '/';
    }

    file.serve(request, response);
}).listen(8080);
