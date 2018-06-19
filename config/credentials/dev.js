module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    project_id: 'trampei-dev-207701',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://accounts.google.com/o/oauth2/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [
      'http://trampei-dev-backend.herokuapp.com/auth/google/callback'
    ],
    javascript_origins: ['http://trampei-dev-backend.herokuapp.com']
  },
  mongo: {
    uri: process.env.MONGO_URI
  },
  cookieKey: process.env.COOKIE_KEY
};
