const Restaurant = require('../models/Restaurant');
const Product = require('../models/Product');

module.exports = {
    
    async index(req, res) {
        const { restaurant_id } = req.params;

        const restaurant = await Restaurant.findByPk(restaurant_id, {
            'include': 'products',
        });

        return res.json(restaurant.products);
    },

    //Issue: there's two restaurant id's on response - fixed (so far)
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

    //Issue: why the return is 1?
    async update(req, res) {
        const { restaurant_id, id } = req.params;
        const { name, price, category } = req.body;

        const restaurant = await Restaurant.findByPk(restaurant_id);

        if (!restaurant) {
            return res.status(400).send({ error: 'Restaurant not found'});
        }

        const product = await Product.update({
            name,
            price,
            category,
        }, {
            where: {
                id,
            }
        });

        return res.json(product);
    },

    async delete(req, res) {
        const { restaurant_id, id } = req.params;

        const restaurant = await Restaurant.findByPk(restaurant_id);

        if (!restaurant) {
            return res.status(400).send({ error: 'Restaurant not found'});
        }

        await Product.destroy({
            where: {
                id,
            }
        });

        return res.send({ 'message': 'Destroyed!' });
    },
}