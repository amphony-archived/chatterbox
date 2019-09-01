const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'messages' }],
  created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Conversation', conversationSchema);