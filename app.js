//const http = require('http'); using http or using express 

const express = require('express');
const bodyParser = require('body-parser'); // to encode the post of input (POST)

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});
app.listen(3000);
//*************************************************** */

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next(); // next app.use
// });

// app.use('/add-product', (req, res, next) => {
//   console.log('In another middleware!');
//   res.send('<h1>The "Add Product" Page</h1>');
// });

// app.use('/', (req, res, next) => {
//   console.log('In another middleware!');
//   res.send('<h1>Hello from Express!</h1>');
// });


/** using http package to  listen to the port  */
//const server = http.createServer(app);

//server.listen(3000);


//******************************************************************************** */
// const http = require('http');

// const routes = require('./routes'); //get export from routes.js and don't write "".js"

// console.log(routes.someText);

// const server = http.createServer(routes.handler); 

// server.listen(3001);