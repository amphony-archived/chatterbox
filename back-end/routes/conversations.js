require('dotenv').config();
const User = require('../models/User');
const Conversation = require('../models/Conversation');
const auth = require('../middleware/auth');

const registerConversationRoutes = app => {
  // @route  GET /conversations
  // @desc   Gets all conversations
  // @access Private
  app.get('/conversations', auth, async (req, res) => {
    let user;
    try {
      user = await User.findById(req.user.id);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err });
    }

    // Retrieve user conversations
    let conversations = await Conversation.find({ '_id': { '$in': user.conversations }});

    await Promise.all(conversations.map(conversation => {
      return User.find({ '_id': { '$in': conversation.participants }}).select('-password');
    }))
    .then(users => {
      let finalConversations = [];
      for (let i = 0; i < conversations.length; i++) {
        const { _id, messages, created } = conversations[i];
        finalConversations.push({
          _id,
          messages,
          created,
          participants: users[i]
        });
      }
      res.json({ conversations: finalConversations });
    })
    .catch(err => console.log(err));
  });

  // @route  POST /conversations
  // @desc   Add a new conversation
  // @access Private
  app.post('/conversations', auth, async (req, res) => {
    try {
      const conversation = new Conversation({
        participants: req.body.participants,
        messages: []
      });
      await conversation.save();
      const user = await User.findByIdAndUpdate(req.user.id, { $push: { conversations: conversation }});
      res.json({ user });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err });
    }
  });
}

module.exports = registerConversationRoutes;