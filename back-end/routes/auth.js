const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config')['development'];
const secret = config.secret;
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const registerAuthRoutes = app => {
  // @route   GET
  // @desc    Get user that logged in
  // @access  Private
  app.get('/auth', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json({ user });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

  // @route   POST
  // @desc    Get auth user and token
  // @access  Public
  app.post(
    '/auth',
    [
      check('username', 'Username is required').exists(),
      check('password', 'Password is required').exists()
    ],
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password } = req.body;
      
      try {
        let user = await User.findOne({ username });
        
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const payload = {
          id: user.id
        }

        jwt.sign(payload, secret, {
          expiresIn: 360000
        }, (err, token) => {
          if (err) throw err;
          console.log('Successful login');
          res.json({ token });
        });
      } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  )
}

module.exports = registerAuthRoutes;