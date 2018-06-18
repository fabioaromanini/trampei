const express = require('express');
require('./services/passport');

const trampeiApp = express();

require('./routes/authRoutes')(trampeiApp);

const PORT = process.env.PORT || 5000;
trampeiApp.listen(PORT);
