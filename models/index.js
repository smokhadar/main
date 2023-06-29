const User = require('./User');
const Channel = require('./Channel');
const Message = require('./Message');
const Participant = require('./Participant');



// User has many Participant FK-user_id
User.hasMany(Participant, {
  foreignKey: 'user_id', // is user_id right? 
  onDelete: 'CASCADE', 
});
// Participant belongs to/ or has One? FK-user_id
Participant.hasOne(User, {
  foriegnKey: 'user_id',
});

// Particpant belongs to Channel, FK channel_id
Participant.belongsTo(Channel, {
  foriegnKey: 'channel_id',
});
// Channel has many participants, FK channel_id
Channel.hasMany(Participant, {
  foreignKey: 'channel_id',
  onDelete: 'CASCADE'
});
// OR
// User belongs to many channels THROUGH Participant
User.belongsTo(Channel, {
  through: Participant, 
  unique: false
});
// Channel has many users THROUGH Participant
Channel.hasMany(User, {
  through: Participant,
  unique: false
});


// Participant has many Messages
Participant.hasMany(Message, {
  foreignKey: 'participant_id',
  onDelete: 'CASCADE' // is this right? delete the message from a channel if username is deleted?
});
// Messages belongs to Participant
Message.belongsToMany(Participant, {
  foreignKey: 'participant_id'
});

// Messages belongs to one Channel
Message.belongsToMany(Channel, {
  foreignKey: 'channel_id'
})
// Channel has many Messages
Channel.hasMany(Message, {
  foreignKey: 'channel_id',
  onDelete: 'CASCADE'
});







module.exports = { User, Channel, Message, Participant };