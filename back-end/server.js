const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const port = config.server.port;

// MongoDB setup
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = `mongodb+srv://${config.database.user}:${config.database.password}@${config.database.db}-gqbrm.mongodb.net/test?retryWrites=true`;

// Connect DB
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch(err => console.log(err.message))

// App setup
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Models
const User = require('./models/User');

// Routes
require('./routes/users')(app);
require('./routes/auth')(app);

app.listen(port, () => console.log(`App listening on port ${port}.`));
