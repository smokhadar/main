const { Model, DataTypes } = require('sequilize');
const sequelize = require('../config/connection');
// const { TIME } = require('sequelize');
// const { Channel } = require('../../../project2main-1/models');

class Message extends Model {} 

Message.init(
  { // message_id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // message_text
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // sent_date_time 
    sentTime: {
      type: DataTypes.DATE
    },
    // from_user_id
    sentBy: {  
      type: DataTypes.STRING,
      allownull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    // conversation_id
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'room',
        key: 'id',
      }
    },

    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "message",
  }
);

module.exports = Message;