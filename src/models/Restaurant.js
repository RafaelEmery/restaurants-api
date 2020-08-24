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
}

module.exports = Restaurant;