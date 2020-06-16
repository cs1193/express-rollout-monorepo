const chalk = require('chalk');

module.exports = require('yargs')
  .usage(`${chalk.bold('express-rollout')} subcommand [options]`)
  .commandDir('./commands')
  .demandCommand()
  .help('help')
  .argv;
