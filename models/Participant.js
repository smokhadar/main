const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Participant extends Model {}

Participant.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    channel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'channel',
        key: 'id'
      }
    },
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: "participant",
    }
);

// module.exports = Participant;