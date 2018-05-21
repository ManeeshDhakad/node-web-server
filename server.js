const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
//app.use(express.static(__dirname + '/pages'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage : 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle : 'About Page'
  });
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage : 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});



// const http = require('http');
// function onRequest(request, response) {
//   console.log("A user made a request"  + request.url);
//   response.writeHead(200, {"Context-Type":"text/plain"});
//   response.write("Here is your response");
//   response.end();
// }
//
// http.createServer(onRequest).listen(8888);
// console.log("Server is now running...");
