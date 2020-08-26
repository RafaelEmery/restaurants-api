const Restaurant = require("../models/Restaurant");
const Product = require("../models/Product");
const Offer = require('../models/Offer');

module.exports = {

    //Issue: How can i do this query?
    async index(req, res) {
        const { restaurant_id, product_id } = req.params;

        const restaurant = await Restaurant.findByPk(restaurant_id);

        if (!restaurant_id) {
            return res.status(400).send({ error: 'Restaurant not found'});
        }

        const product = await Product.findByPk(product_id, {
            'include': 'offers'
        });

        return res.json(product.offers);
    },

    //Issue: the if condition is not working, it has some weird warnings
    async store(req, res) {
        const { restaurant_id, product_id } = req.params;
        const { description, price, day_hour } = req.body;

        const restaurant = Restaurant.findByPk(restaurant_id);
        const product = Product.findByPk(product_id);

        if (!restaurant || !product) {
            return res.status(400).send({ error: 'Restaurant or product not found'});
        }

        const offer = await Offer.create({
            product_id,
            description,
            price,
            day_hour,
        });

        return res.json(offer);
    },

    //Issue: why the return is 1?
    async update(req, res) {
        const { restaurant_id, product_id, id } = req.params;
        const { description, price, day_hour } = req.body;

        const restaurant = Restaurant.findByPk(restaurant_id);
        const product = Product.findByPk(product_id);

        if (!restaurant || !product) {
            return res.status(400).send({ error: 'Restaurant or product not found'});
        }

        const offer = await Offer.update({
            description,
            price,
            day_hour,
        }, {
            where: {
                id,
            },
        });
        
        console.log(offer);
        return res.json(offer);
    },

    async delete(req, res) {
        const { restaurant_id, product_id, id } = req.params;

        const restaurant = Restaurant.findByPk(restaurant_id);
        const product = Product.findByPk(product_id);

        if (!restaurant || !product) {
            return res.status(400).send({ error: 'Restaurant or product not found'});
        }

        await Offer.destroy({
            where: {
                id,
            }
        });

        return res.send({ 'message': 'Destroyed!' });
    }
}