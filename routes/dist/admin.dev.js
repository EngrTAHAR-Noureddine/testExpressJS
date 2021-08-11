"use strict";

var path = require('path');

var express = require('express');

var rootDir = require('../util/path');

var router = express.Router();
var products = []; // /admin/add-product => GET

router.get('/add-product', function (req, res, next) {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add-Product'
  });
}); // /admin/add-product => POST

router.post('/add-product', function (req, res, next) {
  console.log(req.body);
  products.push({
    title: req.body.title
  });
  res.redirect('/');
}); // const express = require('express');
// const router = express.Router();
// router.get('/add-product', (req, res, next) => {
//     console.log("this is admin/add-product ");
//   res.send(
//     '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
//   );
// });
// router.post('/product', (req, res, next) => {
//   console.log(req.body);
//   console.log("this is admin/product ");
//   res.redirect('/');
// });

exports.router = router;
exports.products = products;