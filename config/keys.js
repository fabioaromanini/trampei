if (process.env.ENVIRONMENT === 'dev-server') {
  module.exports = require('./credentials/dev');
} else {
  module.exports = require('./credentials/local');
}
