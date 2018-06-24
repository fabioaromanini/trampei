const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys').google;

const User = mongoose.model('users');

const googleLoginKeys = {
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    googleLoginKeys,
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: profile.id,
        name: profile.name.givenName,
        photoSmall: profile.photos[0].value,
        email: profile.emails[0].value
      }).save();
      done(null, user);
    }
  )
);
