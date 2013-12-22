"use strict";
var util = require('util');
module.exports = function (app) {
  app.get('/', function(req, res){
    res.render('home.ejs',{ layout:'index',title: 'Test Page'});
  });
  require('./module')(app);
};

