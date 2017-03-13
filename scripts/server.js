'use strict';

const express = require('express');
const path = require('path');
const paths = require('../config/paths');

const app = express();

// Serve static assets
app.use(express.static(paths.appBuild));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(paths.appBuildHtml);
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});