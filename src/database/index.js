const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Restaurant = require('../models/Restaurant');
const Product = require('../models/Product');
const Offer = require('../models/Offer');

const connection = new Sequelize(dbConfig);

Restaurant.init(connection);
Product.init(connection);
Offer.init(connection);

Restaurant.associate(connection.models);
Product.associate(connection.models);
Offer.associate(connection.models);

module.exports = connection;