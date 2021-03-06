/*  **********  REQUIREMENTS  **********  */
const router = require('express').Router();
const data   = require('../models/user.seed.json');


/*  **********  ROUTES  **********  */

// ***** Read
router.get('/data', (req, res, next) => {
  console.log('GET');
  res.json(data);
});

// ***** Create
router.post('/data', (req, res, next) => {
  console.log('POST');
  let userData = {
    firstName: req.body.firstName,
    lastName:  req.body.lastName,
    email:     req.body.email
  }
  data.push(userData);
  res.json(data);
});

// ***** Update
router.put('/data', (req, res, next) => {
  console.log('PUT');
  let newData = data.map(data => data.firstName = data.firstName + ' test');
  res.json(newData);
});

// ***** Delete
router.delete('/data', (req, res, next) => {
  console.log('DELETE');
  data.pop();
  res.json(data);
});


/*  **********  EXPORTS **********  */
module.exports = router;
