const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    text: {
      type: DataTypes.STRING,
      // allowNull needs to be true otherwise it won't post
      allowNull: false,
    },
    // // sent_date_time 
    // sentTime: {
    //   type: DataTypes.DATE
    // },
    // from_user_id
    user_id: {  
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    // instead of from_user_id, should it be from participant id? 
    // conversation_id
    // channel_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'channel',
    //     key: 'id',
    //   }
    // },
  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "message",
  }
);

module.exports = Message;