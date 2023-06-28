const User = require('./User');
const Channel = require('./Channel');
const Message = require('./Message');
const Participant = require('./Participant');

// Channel.hasMany(User, {
//   through: {
//     model: Message,
//     unique: false
//   }
// });

// User.hasMany(Channel, {
//   through: {
//     model: Message,
//       unique: false,
//     }
// });
    




module.exports = { User, Channel, Message, Participant };