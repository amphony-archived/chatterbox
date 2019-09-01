require('dotenv').config();
const User = require('../models/User');
const Conversation = require('../models/Conversation');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

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

    Conversation.find({ '_id': { '$in': user.conversations }}, (err, conversations) => {
      if (err) return res.status(400).json({ error: err });
      res.json({ conversations });
    });
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
      await User.findByIdAndUpdate(req.user.id, { $push: { conversations: conversation }});
      res.json({ conversation });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err });
    }
  });
}

module.exports = registerConversationRoutes;