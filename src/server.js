/*  **********  Requirements  **********  */
const express = require('express');
const router  = require('./routes');

// Helper method
const path = require('path');

// Instantiate the application object
const app = express();

// Use the public folder to serve static pages
app.use(express.static(path.resolve(__dirname, '../public')));

// Middleware
app.use('/api', router);

// Listen on port 3000
app.listen(3000, function() {
  console.log('Server is listening on port localhost:3000.');
});
