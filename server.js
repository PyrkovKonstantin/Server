const http = require('http');

http.createServer((request,response)=>{
    
    response.writeHead(200, {"Content-type":"application/json"});  // не пиши заголовки то того как определишься с ответом
    if(request.method === 'GET' && request.url == '/ping'){
        var msg = {                   //используй либо const либо let, let везде где нельзя использовать const, всегда пытайся определять через const
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
