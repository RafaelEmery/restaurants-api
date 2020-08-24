const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Restaurant = require('../models/Restaurant');

const connection = new Sequelize(dbConfig);

Restaurant.init(connection);

module.exports = connection;