const express = require('express');
const { connect } = require('mongoose'); //destructring

const app = express();
let port = 4000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log('myntra server is running on port number' + port);
});
