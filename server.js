// var http = require('http');
const express = require('express');
const expressGraphQl = require('express-graphql')
const schema = require('./schema.js')

const app = express();

app.use('/graphql', expressGraphQl({
    schema:schema,
    graphiql:true
}))

var port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log('Server is running on port ' + port + '..');
});

// var server = http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// var port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);