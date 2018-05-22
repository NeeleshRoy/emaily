const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');
require('./routes/AuthRoutes')(app);

mongoose.connect(keys.mongo.uri);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
