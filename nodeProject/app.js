// to Start the app.js type from the cmd
/* npm start [before that make sure in package.json file

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node nodeProject/app.js"   //You set the path
  },]

*/
var express = require('express');
var app = express();
var port = process.env.PORT || 2212;

app.get('/', function(req, res){
  res.send('Welcome to the Homepage'+'\n'+'This is the most cool website!!!');
});

app.get('/ContactUS', function(req, res) {
  res.send('Welcome to the Contact-US Page');
});

app.listen(port, function(err) {
    console.log('The server is listening the port Number:'+port);
});
