'use strict';

const userSchema = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../../config/config.json');

// Use the configuration from config/config.json
const { username, password, database, host, dialect, dialectOptions } = config.development;
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  dialectOptions: dialectOptions,
});

module.exports = {
  userDB: sequelize,
  users: userSchema(sequelize, DataTypes),
};
