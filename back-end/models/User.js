const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
  preferences: {
    displayMode: { type: String, default: 'username' },
    profileColor: { type: String, default: 'blue' }
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
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

// Index for query performance on username and sort performance on created
userSchema.index({ username: 1, created: 1 });

module.exports = mongoose.model('User', userSchema);