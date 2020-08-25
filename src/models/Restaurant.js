const { Model, DataTypes } = require('sequelize');

class Restaurant extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            opening_hours: DataTypes.STRING,
        }, {
            sequelize: connection,
        });
    }

    static associate(models) {
        this.hasMany(models.Product, {
            foreignKey: 'restaurant_id',
            as: 'products',
        });
    }
}

module.exports = Restaurant;