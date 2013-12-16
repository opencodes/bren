"use strict";
var util = require('util');
module.exports = function (app) {
  app.get('/', function(req, res){
    res.render('home.ejs',{ layout:'layout/pt_storefront',title: 'HOME'});
  });
  app.get('/sitegenesis', function(req, res){
    res.render('home.ejs',{ layout:'layout/sitegenesis',title: 'HOME'});
  });
  app.get('/clp', function(req, res){
    res.render('modules/clp.ejs',{ layout:'layout/pt_productsearchresult',title: 'PLP'});
  });
  app.get('/plp', function(req, res){
	    res.render('modules/plp.ejs',{ layout:'layout/pt_productsearchresult',title: 'PLP'});
  });
  app.get('/pdp', function(req, res){
    res.render('modules/pdp.ejs',{ layout:'layout/pt_productdetails',title: 'PDP'});
  });
  app.get('/cart', function(req, res){
    res.render('modules/cart.ejs',{ layout:'layout/pt_cart',title: 'CART'});
  });
  app.get('/checkout', function(req, res){
    res.render('modules/checkout.ejs',{ layout:'layout/pt_checkout',title: 'CHECKOUT'});
  });
  app.get('/placeorder', function(req, res){
    res.render('modules/placeorder.ejs',{ layout:'layout/pt_placeorder',title: 'PLACE ORDER'});
  });
  require('./module')(app);
};