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

// We tell Express to look into the first Public folder
//Get to know if the static directories working fine or not go to the browser and
// type /css/agency.css
// If we see the content then we can say static method is working fine for us
app.use(express.static('public'));

//It will check first If any request not found in public It will go to scr/views before going app.get, app.post, app.delete
app.use(express.static('src/views'));
//After that type in browser /index.html or nothing by default it will go to the home Page

//Add bower Component for bootstrap and Jquey
app.use(express.static('bower_components'));


app.get('/', function(req, res){
  res.send('Welcome to the Homepage'+'\n'+'This is the most cool website!!!');
});

app.get('/ContactUS', function(req, res) {
  res.send('Welcome to the Contact-US Page');
});

app.listen(port, function(err) {
    console.log('The server is listening the port Number:'+port);
});
