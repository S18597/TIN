function parser(p){
    if(Number(p)) return Number(p);
    else throw "Error: invalid input.";
}

function calculator(requestURL, x, y){
    if (requestURL.startsWith('/add'))
        return Number(x) + Number(y);
    if (requestURL.startsWith('/subtract'))
        return Number(x) - Number(y);
    if (requestURL.startsWith('/divide')){
        if (y == 0){
            throw "Error: cannot divide by 0."
        }else {            
            return Number(x) / Number(y);
        }
    }
    if (requestURL.startsWith('/multiply'))
        return Number(x) * Number(y);
    throw "Error: invalid operator " + requestUrl;
}

let HTTP = require('http');
let URL = require('url');

HTTP.createServer(function (request, result) {
    const query = URL.parse(request.URL,true).query;
    var a = parser(query.a);
    var b = parser(query.b);
    var results = calculator(request.URL, a, b);
    let responseText = "<html>	<p>" + a + " +-/* " + b + " = " + results + "</html>";
    result.end(responseText);
}).listen(7000);