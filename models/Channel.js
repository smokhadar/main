const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Channel extends Model {};

Channel.init(
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
        // createdBy: {
        // },
        // user_id: {
        // },
        // // createDate: {
        // //     type: DataTypes.DATE
        // // },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "channel",
    }
);

// module.exports = Channel;