'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Testing JS based web-app and adding an update once again and again and again');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
