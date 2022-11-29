require('dotenv').config();
import Sequelize from 'sequelize';

const sequelizeConfig = require('./db_config');

const conf = sequelizeConfig[process.env.DATABASE_ENVIROMENT];

const model = new Sequelize(conf.database, 
  conf.username, 
  conf.password, {
    host: conf.host,
    dialect: conf.dialect,
    pool: {
      max: 40,
      min: 0,
      idle: 10000,
      acquire: 60000
    },
  });

export {model , Sequelize};