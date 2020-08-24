const express = require('express');
const routes = express.Router();

const RestaurantController = require('./controllers/RestaurantController');
const ProductController = require('./controllers/ProductController');

routes.get('/restaurants', RestaurantController.index)
routes.get('/restaurants/:id', RestaurantController.show)
routes.post('/restaurants', RestaurantController.store)
routes.put('/restaurants/:id', RestaurantController.update)
routes.delete('/restaurants/:id', RestaurantController.delete);

routes.get('/restaurants/products', ProductController.index);
routes.get('/restaurants/products/:id', ProductController.show);
routes.post('/restaurants/:restaurant_id/products', ProductController.store);

module.exports = routes;