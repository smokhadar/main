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

// User belongs to many channels THROUGH Participant
User.belongsTo(Channel, {
  through: {
    model: Participant, 
    unique: false
  }
});
// Channel has many users THROUGH Participant
Channel.hasMany(User, {
  through: {
    model: Participant,
    unique: false
  }
});

// Participant has many Messages
Participant.hasMany(Message, {
  through: {
    model: Channel,
    unique: false,
  }
});
// Messages belongs to Participant
Message.belongsToMany(Participant, {
  through: {
    model: Channel,
    unique: false
  }
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

// message belongs to user
Message.belongsToMany(User, {
  foreignKey: 'user_id'
});
// user has many message
User.hasMany(Message, {
  foreignKey: 'user_id'
});


// // message belongs to user if we change user_id to participant_id
// Message.belongsTo(User, {
//   through: {
//     model: Participant,
//     unique: false,
//   }
// });

// // user has many message if we change user_id to participant_id
// User.hasMany(Message, {
//   through: {
//     model: Participant,
//     unique: false, 
//   }
// });




module.exports = { User, Channel, Message, Participant };