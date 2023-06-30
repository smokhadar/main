const User = require('./User');
// const Channel = require('./Channel');
const Message = require('./Message');
// const Participant = require('./Participant');

// // User has many Participant FK-user_id
// User.hasMany(Participant, {
//   foreignKey: 'user_id', // is user_id right? 
//   onDelete: 'CASCADE', 
// });
// // Participant belongs to/ or has One? FK-user_id
// Participant.hasOne(User, {
//   foreignKey: 'user_id',
// });

// // Particpant belongs to Channel, FK channel_id
// Participant.belongsToMany(Channel, {
//   through: {
//     model: Channel,
//     unique: false,
//   },
//   foreignKey: 'channel_id',
// });

// // Channel has many participants, FK channel_id
// Channel.hasMany(Participant, {
//   foreignKey: 'channel_id',
//   onDelete: 'CASCADE'
// });

// // User belongs to many channels THROUGH Participant
// User.belongsToMany(Channel, {
//   through: {
//     model: Participant, 
//     unique: false
//   }
// });
// // Channel has many users THROUGH Participant
// Channel.belongsToMany(User, {
//   through: {
//     model: Participant,
//     unique: false
//   }
// });

// // Participant has many Messages
// Participant.hasMany(Message, {
//   through: {
//     model: Channel,
//     unique: false,
//   }
// });
// // Messages belongs to Participant
// Message.belongsToMany(Participant, {
//   through: {
//     model: Channel,
//     unique: false
//   }
// });

// // Messages belongs to one Channel
// Message.belongsTo(Channel, {
//   foreignKey: 'channel_id'
// })

// // Channel has many Messages
// Channel.hasMany(Message, {
//   foreignKey: 'channel_id',
//   onDelete: 'CASCADE'
// });

// message belongs to user
Message.belongsTo(User, {
  foreignKey: 'user_id'
});
// user has many message
User.hasMany(Message, {
  foreignKey: 'user_id'
});

module.exports = { User, Message };