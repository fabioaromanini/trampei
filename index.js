const express = require('express');
const trampeiApp = express();

trampeiApp.get('/', (req, res) => {
  res.send('HI');
});

const PORT = process.env.PORT || 5000;
trampeiApp.listen(5000);
