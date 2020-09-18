var http = require("http");
var url = require("url");
var route = require('./route');
 
function start() {
    function onRequest(request, response) {
        response.writeHead(200, {
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*"
        });
        if(request.method=='POST'){
            var pathname = url.parse(request.url).pathname;
            route.route(pathname,request,response);
        }
        else{
            response.end();
        }
    }
    
    http.createServer(onRequest).listen(9156);
    console.log("Server has started.");
}
 
exports.start = start;
