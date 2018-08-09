/*  **********  Requirements  **********  */
const express    = require('express');
const router     = require('./routes');
const path       = require('path');     // helper method
const bodyParser = require('body-parser');

// Instantiate the application object
const app = express();

// Use the public folder to serve static pages
app.use(express.static(path.resolve(__dirname, '../public')));

// Middleware
app.use(bodyParser.json());
app.use('/api', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('ERROR 404');
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

/*  **********  BEGIN ERROR HANDLER  **********  */
  
// define as the last app.use callback
app.use(function(err, req, res, next) {
  console.log('ERROR');
  res.status(err.status  ||  500);
  // Must have view engine to use res.render
  res.json({
    message:  err.message,
    error:    err
  });
});

// Listen on port 3000
app.listen(3000, function() {
  console.log('Server is listening on port localhost:3000.');
});
