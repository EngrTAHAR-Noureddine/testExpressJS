const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const products =[];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {

  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
 // res.render('add-product',{pageTitle : 'Add-Product' , productsList:"no"});
 res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({title : req.body.title});
  res.redirect('/');
});

// const express = require('express');

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
