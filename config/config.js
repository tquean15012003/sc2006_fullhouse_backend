require('dotenv').config(); // this is important!
module.exports = {
"development": {
    "username": "root", // process.env.DB_USERNAME,
    "password": "Nguyenxuanmai2101", // process.env.DB_PASSWORD,
    "database": "full_house_database", // process.env.DB_DATABASE,
    "host": "127.0.0.1", // process.env.DB_HOST,
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
