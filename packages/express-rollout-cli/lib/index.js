const chalk = require('chalk');

module.exports = require('yargs')
  .usage(`${chalk.bold('express-rollout')} subcommand [options]`)
  .demandCommand()
  .help('help')
  .argv;
