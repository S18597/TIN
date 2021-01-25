var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.post('/', function (request, response) {
    var data = request.body;
    console.log(data);
    var x = parseFloat(data['x']);
    var y = parseFloat(data['y']);
    var operator = data['operator'];
    var result;

    switch(operator){
        case 'addition':
            result = x + y;
            break;
        case 'subtraction':
            result = x - y;
            break;
        case 'multiplication':
            result = x * y;
            break;
        case 'division':
             result = x / y;
             break;
        default:
            result = 'Invalid input.';
    }
    data['result'] = result;
    response.json(data);

 })

var server = app.listen(8080, function() {
    var port = server.address().port;
    console.log('Port: ' + port);
})