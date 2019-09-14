const { connectDB, config } = require('./config/config');
const port = config.node_port;

// Database setup
connectDB();

// App setup
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
require('./routes/users')(app);
require('./routes/auth')(app);
require('./routes/conversations')(app);

app.listen(port, () => console.log(`App listening on port ${port}.`));
