/* ***** REQUIREMENTS ***** */
const http = require('http');
const path = require('path');

/* ***** VARIABLES ***** */
const hostname = '127.0.0.1';
const port = 3000;

const publicPath = path.resolve(__dirname, '../public');

console.log(publicPath);

// Create Server
const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`<h1>URL: ${req.url}</h1>`);

  switch ( req.url ) {
    case '/':
      console.log(req.url);
      res.write('<p>Welcome to my website.  Prepare to be dazzled.</p>');
      break;
    case '/about':
      console.log(req.url);
      res.write('<p>Welcome to the about page.</p>');
      break;
    case '/blog':
      console.log(req.url);
      res.write('<p>Welcome to my first blog post.</p>');
      break;
    case '/faqs':
      console.log(req.url);
      res.write('<p>Welcome to the faqs page.</p>');
      break;
  }
  res.end('<p>Hello World!</p>');
});

// Listen
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
