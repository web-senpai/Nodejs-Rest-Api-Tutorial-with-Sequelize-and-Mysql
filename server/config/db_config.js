require('dotenv').config();

module.exports = {
  
    "development": {
      "username": process.env.DATABASE_DEVELOPMENT_USERNAME,
      "password": process.env.DATABASE_DEVELOPMENT_PASSWORD,
      "database": process.env.DATABASE_DEVELOPMENT_DATABASE,
      "host": process.env.DATABASE_DEVELOPMENT_HOST,
      "dialect": process.env.DATABASE_DIALECT
    }

};