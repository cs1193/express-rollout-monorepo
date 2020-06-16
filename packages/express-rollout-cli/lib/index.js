const chalk = require('chalk');

module.exports = require('yargs')
  .usage(`${chalk.bold('express-rollout-cli')} subcommand [options]`)
  .argv;
