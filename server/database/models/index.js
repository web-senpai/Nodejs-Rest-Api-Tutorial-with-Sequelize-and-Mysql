'use strict';

const fs = require('fs');
const path = require('path');
const { model, Sequelize } = require('../../config/model_config');
const basename = path.basename(__filename);

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') && (file != "base_model.js");
  })
  .forEach(file => {
    let model = require(path.join(__dirname, file)).default;
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (typeof db[modelName].associate == 'function') {
    db[modelName].associate(db);
  }
});

db.sequelize = model;
db.Sequelize = Sequelize;

module.exports = db;