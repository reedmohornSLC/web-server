var express = require('express');
var app = express();

var middleware= require('./middleware.js');

//this will apply to every route hit and page requested, unless specified
//within route//middleware should be expressed up top
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

//middleware.requireAuthentication makes middleware specifit
app.get('/about',middleware.requireAuthentication, function(req,res){
  res.send('About me, the taxpayer');
});
//this will be default root if no root / is defined, all files in public can now be seen
app.use(express.static(__dirname+ '/public'));
//using variable to go to this port
//process.env.PORT is for heroku not local 
var meeganport = process.env.PORT || 3500;

app.listen(meeganport,function(){
  console.log('Express Server Started on Port: '+ meeganport+'!')
});
