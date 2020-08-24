const Restaurant = require('../models/Restaurant');
const Product = require('../models/Product');

module.exports = {
    
    async index(req, res) {
        const products = await Product.findAll();

        return res.json(products);
    },

    async show(req, res) {
        const { id } = req.body;

        const product = await Product.findByPk(id);

        return res.json(product);
    },

    //Issue: there's two restaurant id's on response
    async store(req, res) {
        const { restaurant_id } = req.params;
        const { name, price, category } = req.body

        const restaurant = await Restaurant.findByPk(restaurant_id);

        if (!restaurant) {
            return res.status(400).send({ error: 'Restaurant not found'});
        }

        const product = await Product.create({
            restaurant_id,
            name,
            price,
            category,
        });

        return res.json(product);
    },

    async update(req, res) {

    },

    async delete(req, res) {

    },
}