const path = require('path');
const express = require('express');

const expressRollout = require('../lib');
const rollout = expressRollout.initialize({
  featureMetaFile: path.resolve(__dirname, './fixtures/feature-meta.yml')
});

const app = express();

///////////////// rollout middleware //////////////////
app.use(rollout.middleware);
///////////////// rollout middleware //////////////////

app.get('/', (req, res) => {
  res
    .status(200)
    .send();
});

module.exports = app;
