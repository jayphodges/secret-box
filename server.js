// server.js
var express = require('express')
var app = express()

app.locals.title = "Secret Box"
app.set('port', process.env.PORT || 3000)

app.get('/', function(request, response) {
  response.send('It\'s a secret to everyone.')
})

// set the port for Express to run on


if(!module.parent){
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`)
  })
}

module.exports = app;
