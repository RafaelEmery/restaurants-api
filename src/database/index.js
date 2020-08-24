const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Restaurant = require('../models/Restaurant');
const Product = require('../models/Product');

const connection = new Sequelize(dbConfig);

Restaurant.init(connection);
Product.init(connection);

Restaurant.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;