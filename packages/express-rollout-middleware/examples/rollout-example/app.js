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

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

///////////////// rollout middleware //////////////////
app.use(rollout.middleware);
///////////////// rollout middleware //////////////////

app.get('/', (req, res) => {
  res.json({
    message: 'rollout-example'
  })
});

app.get('/rollout-page', (req, res) => {
  res.render('index', {
    message: 'rollout-view-example'
  });
});

const server = http.createServer(app);

server.listen(PORT, HOST);
server.on('listening', () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});

server.on('error', (error) => {
  console.log(`Failed to listen with errors - ${error}`);
});
