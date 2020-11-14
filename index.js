const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');


const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello developers!');
});
http.createServer(app).listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
