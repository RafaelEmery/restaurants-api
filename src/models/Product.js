const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.DOUBLE,
            category: DataTypes.STRING,
        }, {
            sequelize: connection,
        });
    }

    static associate(models) {
        this.belongsTo(models.Restaurant, {
            foreignKey: 'restaurant_id',
            as: 'restaurant',
        });

        this.hasOne(models.Offer, {
            foreignKey: 'product_id',
            as: 'offer',
        });
    }
}   

module.exports = Product;