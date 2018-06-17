const express = require('express');
const trampeiApp = express();

trampeiApp.get('/', (req, res) => {
  res.send('HI');
});

trampeiApp.listen(5000);
