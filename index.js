const express = require('express');
const mongoose = require('mongoose');
const mongoCredentials = require('./credentials/dev').mongo;

require('./models/User');
require('./services/passport');

mongoose.connect(mongoCredentials.uri);
const trampeiApp = express();

require('./routes/authRoutes')(trampeiApp);

const PORT = process.env.PORT || 5000;
trampeiApp.listen(PORT);
