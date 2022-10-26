require('dotenv').config(); // this is important!
module.exports = {
"development": {
    "username": "root", // "quean001"
    "password":  "Nguyenxuanmai2101", // "Harryharry2!"
    "database": "full_house_database",
    "host": "127.0.0.1", // "fullhouse-database.crtl1l1yxocc.ap-southeast-1.rds.amazonaws.com",
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
