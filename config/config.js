require('dotenv').config(); // this is important!
module.exports = {
"development": {
    "username": "quean001", // process.env.DB_USERNAME,
    "password": "Harryharry2!", // process.env.DB_PASSWORD,
    "database": "full_house_database", // process.env.DB_DATABASE,
    "host": "full-house-database.clidc0mbwz2w.ap-southeast-1.rds.amazonaws.com", // process.env.DB_HOST,
    "dialect": "mysql"
  },
  
  "test": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "mysql"  
  },
  
  "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "mysql"
  }
};
