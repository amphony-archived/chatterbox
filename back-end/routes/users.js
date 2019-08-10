const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

const registerUserRoutes = app => {
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

      user = new User({
        username,
        password,
        created: new Date()
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('User saved in database');
    } catch(err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
}

module.exports = registerUserRoutes;