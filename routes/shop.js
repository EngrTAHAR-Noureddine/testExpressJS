const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//     console.log("this is shope/product ");
//   res.send('<h1>Hello from Express SHOPE!</h1>');
// });

module.exports = router;