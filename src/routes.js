const express = require('express');
const routes = express.Router();

const RestaurantController = require('./controllers/RestaurantController');

routes
    .get('/restaurants', RestaurantController.index)
    .get('/restaurant/:id', RestaurantController.show)
    .post('/restaurants', RestaurantController.store)
    .put('/restaurant/:id', RestaurantController.update)
    .delete('/restaurant/:id', RestaurantController.delete);

module.exports = routes;