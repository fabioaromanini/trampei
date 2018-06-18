const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./credentials');

const trampeiApp = express();

const googleLoginKeys = {
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: '/auth/google/callback'
};

passport.use(
  new GoogleStrategy(googleLoginKeys, accessToken => console.log(accessToken))
);

const PORT = process.env.PORT || 5000;
trampeiApp.listen(PORT);
