require('dotenv').config();
const secret = process.env.SECRET;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const registerUserRoutes = app => {
  // @route  GET  /users
  // @desc   Get users that match search
  // @access Private
  app.get('/users', auth, (req, res) => {
    const query = req.query.username;
    const flags = 'i';
    const regex = new RegExp(query, flags);
    User.find(
      { username: regex },
      '_id username firstName lastName',
      (err, users) => {
        if (err) return res.status(400).json({ error: err });
        res.json({ users });
      }
    )
  });

  // @route  POST /users
  // @desc   Register a user
  // @access Public
  app.post('/users', [
    check('username', 'Username is required')
      .not()
      .isEmpty(),
    check('password', 'Password of at least 6 characters is required')
      .isLength({ min: 6 })
  ], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      let user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      user = new User(req.body);

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        id: user.id
      }

      jwt.sign(payload, secret, {
        expiresIn: 360000
      }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch(err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

  // @route  Get /contacts
  // @desc   Gets user contacts
  // @access Private
  app.get('/contacts', auth, async (req, res) => {
    let user;
    try {
      user = await User.findById(req.user.id);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err });
    }

    User.find({ '_id': { '$in': user.contacts }}, (err, contacts) => {
      if (err) return res.status(400).json({ error: err });
      console.log(contacts);
      res.json({ contacts });
    });
  });

  // @route  POST /contacts
  // @desc   Add contact to current user
  // @access Private
  app.post('/contacts', auth, async (req, res) => {
    User.findByIdAndUpdate(req.user.id, { $push: { contacts: req.body.contact }}, (err, contact) => {
      if (err) return res.status(400).json({ error: err });
      console.log(contact);
      res.json({ contact });
    });
  });

}

module.exports = registerUserRoutes;