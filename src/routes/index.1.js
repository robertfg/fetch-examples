/*  **********  REQUIREMENTS  **********  */
const router = require('express').Router();
const data   = require('../models/user.seed.json');
// var data   = require('../models/user.seed.json');

/*  **********  ROUTES  **********  */

// This route is just for testing.
// router.get('/', (req, res, next) => {
//   console.log('API');
//   res.send(`<h1>This is the API.</h1>`);
// });

router.get('/data', (req, res, next) => {
  console.log('GET');
  res.json(data);
});

router.put('/data', (req, res, next) => {
  console.log('PUT');
  let newData = data.map(data => data.firstName = data.firstName + ' test');
  res.json(newData);

  // Doesn't work
  // data = data.map(data => data.firstName = data.firstName + ' test');
  // res.json(data);
});

router.post('/data', (req, res, next) => {
  console.log('POST');

  let userData = {
    firstName: req.body.firstName,
    lastName:  req.body.lastName,
    email:     req.body.email
  }

  // let dataLen = data.length;
  data.push(userData);
  res.json(data);
});


router.delete('/data', (req, res, next) => {
  console.log('DELETE');

  // let dataLen = data.length;
  data.pop();
  res.json(data);
});


/*  **********  EXPORTS **********  */
module.exports = router;
