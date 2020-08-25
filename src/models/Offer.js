const { Model, DataTypes } = require('sequelize');

class Offer extends Model {
    static init(connection) {
        super.init({
            description: DataTypes.STRING,
            price: DataTypes.DOUBLE,
            day_hour: DataTypes.STRING,
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.belongsTo(models.Product, {
            foreignKey: 'product_id',
            as: 'product',
        });
    }
}

module.exports = Offer;