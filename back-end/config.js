require('dotenv').config();

var config = {
  development: {
    // mongodb details
    url: 'http://localhost:3000',
    database: {
      user: process.env.MONGODB_ATLAS_USER,
      password: process.env.MONGODB_ATLAS_USER_PASSWORD,
      db: process.env.DB
    },
    // server details
    server: {
      port: process.env.PORT || 5000
    }
  }
}

module.exports = config;