const http = require('http');
const path = require('path');

const express = require('express');

const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const expressRollout = require('express-rollout');
const rollout = expressRollout.initialize({
  featureMetaFile: path.resolve(__dirname, './feature-meta.yml')
});

app.use(cors());
app.use(helmet());
app.use(rollout.middleware);

const app = express();

const server = http.createServer(app);

server.listen(PORT, HOST);
server.on('listening', () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});

server.on('error', (error) => {
  console.log(`Failed to listen with errors - ${error}`);
});
