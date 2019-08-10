const registerAuthRoutes = app => {
  // @route   GET
  // @desc    Get logged in user
  // @access  Private
  app.get('/auth', (req, res) => {
    res.send('Log in user');
  });

  // @route   POST
  // @desc    Get auth user and token
  // @access  Public
  app.post('/auth', (req, res) => {
    res.send('Log in user');
  })
}

module.exports = registerAuthRoutes;