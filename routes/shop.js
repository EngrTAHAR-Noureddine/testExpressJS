const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {

  console.log(adminData.products);
  const adProducts = adminData.products;
  // this line : to send file html.
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // and this line for pug: 
  //res.render('shope',{ products : adProducts, pageTitle: 'Shop', productsList:"yes" });
  res.render('shope', {
    prods: adProducts,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: adProducts.length > 0,
    activeShop: true,
    productCSS: true
  });

  
});

// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//     console.log("this is shope/product ");
//   res.send('<h1>Hello from Express SHOPE!</h1>');
// });

module.exports = router;