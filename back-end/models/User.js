const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', userSchema);