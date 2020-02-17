let http = require('http');

// define app constants
const PORT = 9000;

// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
  console.log(request.method);
  // respond to all requests in this function
  if(request.url === '/') {
    response.end('Welcome to my website!');
  } else if (request.url === '/potato') {
    response.write('This is part of the response');
    response.write('This is another part');
    response.end('This is not a website about potatoes, sorry!');
    response.write('This is another part');
  } else {
    response.end('Hello from the other siiiiiiide!');
  }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
