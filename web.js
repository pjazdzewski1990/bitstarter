var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('index.html', function (err, html) {
		if (err) {
			console.log("Index.html: " +err);
			throw err; 
		}
    response.write(html);  
    response.end();  
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
