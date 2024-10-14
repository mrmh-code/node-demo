var http = require('http');

// Create a server object
http.createServer(function (req, res) {
  res.write('A Monk in Cloud'); // Write a response to the client
  res.end(); // End the response
}).listen(3000); // The server object listens on port 3000
