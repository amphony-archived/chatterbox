const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: { type: String },
  timeStamp: { type: Date, default: Date.now() },
  sentBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  sentTo: { type: mongoose.Schema.Types.ObjectId, ref: 'conversations' }
});

module.exports = mongoose.model('Message', messageSchema);