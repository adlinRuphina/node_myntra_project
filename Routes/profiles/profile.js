//ROUTER LEVEL MIDDLEWEAR
const express = require('express');
const router = express.Router(); //it will called only router-level middlewear

//@http method GET
//@description its profile get info
//@access this is public

router.get('/', (req, res) => {
  res.send('i am profile router');
});

module.exports = router;
