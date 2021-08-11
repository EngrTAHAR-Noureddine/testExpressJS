"use strict";

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

var adminRoutes = require('./routes/admin');

var shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/admin', adminRoutes.router);
app.use(shopRoutes);
app.use(function (req, res, next) {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.render('404', {
    pageTitle: '404 not found'
  });
});
app.listen(3000);
/* 

First, you would want to know which process is using port 3000

sudo lsof -i :3000
this will list all PID listening on this port, once you have the PID you can terminate it with the following:

kill -9 {PID} */
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// app.use(bodyParser.urlencoded({extended: false}));
// // app.use(adminRoutes);
// // app.use(shopRoutes);
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>');
// });