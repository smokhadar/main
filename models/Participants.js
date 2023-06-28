const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Participants extends Model {}

Participants.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    joinDate: {
      type: DataTypes.DATE,
    },
    leaveDate: {
      type: DataTypes.DATE,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    channel: {
      type: DataTypes.INTEGER,
      references: {
        model: 'channel',
        key: 'id'
      }
    },

    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "message",
  }
);

module.exports = Participants;