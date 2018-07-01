module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  mongo: {
    uri: process.env.MONGO_URI
  },
  cookieKey: process.env.COOKIE_KEY
};
