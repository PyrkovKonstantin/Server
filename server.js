const http = require('http');

http.createServer((request,response)=>{
    
    response.writeHead(200, {"Content-type":"application/json"});
    if(request.method === 'GET' && request.url == '/ping'){
        var msg = {
            message: 'pong'
        };
        response.end(JSON.stringify(msg));
    }
    else{
        response.writeHead(404, {"Content-type":"application/json"});
        var err = {
            Error: 'Not Found'
        };
        response.end(JSON.stringify(err))
        
    }
  
    response.end();

   
    
}).listen(3000);