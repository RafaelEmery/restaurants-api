const Restaurant = require("../models/Restaurant");
const Product = require("../models/Product");
const Offer = require('../models/Offer');

module.exports = {

    //Issue: How can i do this query?
    async index(req, res) {
        
    },

    //Issue: the if condition is not working, it has some weird warnings
    //Issue: returning weird value....
    async store(req, res) {
        const { restaurant_id, product_id } = req.params;
        const { description, price, day_hour } = req.body;

        const restaurant = Restaurant.findByPk(restaurant_id);
        const product = Product.findByPk(product_id);

        if (!restaurant || !product) {
            return res.status(400).send({ error: 'Restaurant or product not found'});
        }

        const offer = Offer.create({
            product_id,
            description,
            price,
            day_hour,
        });

        return res.json(offer);
    },

    async update(req, res) {

    },

    async delete(req, res) {
        
    }
}