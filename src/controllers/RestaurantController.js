const Restaurant = require('../models/Restaurant');

module.exports = {
    
    async index(req, res) {
        const restaurants = await Restaurant.findAll();

        return res.json(restaurants);
    },

    //Issue: Get a restaurant by query params on index or show function?
    async show(req, res) {
        const { id } = req.params;

        const restaurant = await Restaurant.findByPk(id);

        return res.json(restaurant);
    },

    async store(req, res) {
        const { name, address, opening_hours } = req.body;

        const restaurant = await Restaurant.create({
            name,
            address,
            opening_hours,
        });

        return res.json(restaurant);
    },

    //Issue: why the return is 1?
    async update(req, res) {
        const { id } = req.params;
        const { name, address, opening_hours } = req.body;

        const restaurant = await Restaurant.update({
            name,
            address,
            opening_hours,
        }, {
            where: {
                id,
            }
        });

        return res.json(restaurant);
    },

    async delete(req, res) {
        const { id } = req.params;

        await Restaurant.destroy({
            where: {
                id,
            }
        });

        return res.send({ 'message': 'Destroyed!' });
    },
}