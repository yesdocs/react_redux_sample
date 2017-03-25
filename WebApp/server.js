var http = require('http'),
    filed = require('filed');


// create a static file server with the default document being default.html
server = http.createServer(function(req, resp){
  if(req.url === "/"){
    req.pipe(filed('./default.html')).pipe(resp);
  }else{
    req.pipe(filed("./" + req.url)).pipe(resp);
  }
});

var port = process.argv[2] || 8080

server.listen(port, function(){
  console.log("Server started on http://localhost:" + port + "/");
});