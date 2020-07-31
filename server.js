const express = require('express');
const { connect } = require('mongoose'); //destructring
const exphbs = require('express-handlebars'); //load middlewear
const bodyParser = require('body-parser');
const { PORT, MONGODB_URL } = require('./config/index'); //DESTRUCT CONFIG FOLDER
const app = express(); //MAIN FUNCTION CALLED ONCE

//=================CONNECT DATABASE=====================//

connect(
  MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log('myntra databse is connected..!😂😆');
  }
);

//==================DATABASE CONNECTION ENDS HERE==============//

//=============template engine middleware starts here================//

app.engine('handlebars', exphbs()); //setting engine that is handlebars,to avoid html
app.set('view engine', 'handlebars');

//=============template engine  middleware ends here====================//

//==============body parser incoming req stream to convert data starts here=========//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//==============body parser incoming req stream to convert data starts here=========//

//===============server static assets=====================//
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
//===============server static assets ends =====================//

//==============load routes module================//
app.use('/profile/', require('./Routes/profiles/profile')); //calling profile.js

//=============load modules ends here================//
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('myntra server is running on port number 👉😆' + PORT);
});
