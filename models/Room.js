const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Room extends Model {};

Room.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "room",
    }
);

module.exports = Room;