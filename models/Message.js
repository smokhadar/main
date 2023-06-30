const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const { TIME } = require('sequelize');
// const { Channel } = require('../../../project2main-1/models');

class Message extends Model {}

Message.init(
  {
    // message_id
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
      type: DataTypes.DATE,
      allowNUll: true,
    },
    // from_user_id
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "message",
  }
);

module.exports = Message;
