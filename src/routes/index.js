/*  **********  REQUIREMENTS  **********  */
const router = require('express').Router();
const data   = require('../models/user.seed.json');

/*  **********  ROUTES  **********  */
router.get('/', (req, res, next) => {
  console.log('API');
  res.send(`<h1>This is the API.</h1>`);
});

router.get('/data', (req, res, next) => {
  console.log('DATA');
  res.json(data);
});


/*  **********  EXPORTS **********  */
module.exports = router;
