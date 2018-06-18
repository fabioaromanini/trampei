const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../credentials/client_id_dev').google;

const googleLoginKeys = {
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: '/auth/google/callback'
};

passport.use(
  new GoogleStrategy(
    googleLoginKeys,
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);
