require('dotenv').config();
const config = require('./config.json');
const environment = process.env.NODE_ENV || 'development';
const finalConfig = config[environment];
const dbConfig = finalConfig.database;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connectDB = () => {
  const user = process.env.DB_USER || dbConfig.user;
  const password = process.env.DB_PASSWORD;
  const cluster = process.env.DB_CLUSTER || dbConfig.cluster;
  const db = process.env.DB_NAME || dbConfig.name;
  const uri = `mongodb+srv://${user}:${password}@${cluster}-gqbrm.mongodb.net/${db}`;

  // Connect DB
  mongoose.connect(uri)
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch(err => console.log(err.message));
};

module.exports = {
  connectDB,
  config: finalConfig
};