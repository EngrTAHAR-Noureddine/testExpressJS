"use strict";

var path = require('path');

var express = require('express');

var rootDir = require('../util/path');

var adminData = require('./admin');

var router = express.Router();
router.get('/', function (req, res, next) {
  console.log(adminData.products);
  var adProducts = adminData.products; // this line : to send file html.
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // and this line for pug: 

  res.render('shope', {
    products: adProducts,
    pageTitle: 'Shop'
  });
}); // const express = require('express');
// const router = express.Router();
// router.get('/', (req, res, next) => {
//     console.log("this is shope/product ");
//   res.send('<h1>Hello from Express SHOPE!</h1>');
// });

module.exports = router;