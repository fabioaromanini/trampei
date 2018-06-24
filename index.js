const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

const mongoCredentials = keys.mongo;
const cookieKey = keys.cookieKey;

require('./models/User');
require('./services/passport');

mongoose.connect(mongoCredentials.uri);

const trampeiApp = express();

trampeiApp.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [cookieKey]
  })
);

trampeiApp.use(passport.initialize());
trampeiApp.use(passport.session());

require('./routes/authRoutes')(trampeiApp);

if (process.env.ENVIRONMENT === 'dev-server') {
  trampeiApp.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
trampeiApp.listen(PORT);
