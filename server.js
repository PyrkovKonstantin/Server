const http = require('http');

http.createServer((request,response)=>{
    
    response.writeHead(200, {"Content-type":"application/json"});
    if(request.method === 'GET' && request.url == '/ping'){
        var obj = {
            message: 'pong'
        };
        response.end(JSON.stringify(obj));
    }
    else{
        response.writeHead(404, {"Content-type":"text/plain"});
        response.end("Not Found");
    }
  
    response.end();

   
    
}).listen(3000);