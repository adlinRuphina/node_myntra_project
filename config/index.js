require('dotenv').config(); //load dotenv
//export env file and port is gloabally avail,it give access to remote server after deployment
//process.env will be use to protect data
module.exports = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
};
