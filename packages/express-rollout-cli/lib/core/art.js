const chalk = require('chalk');
const figlet = require('figlet');

module.exports = () => {
  const art = figlet.textSync('express-rollout', {
    font: 'Standard'
  });
  console.log(`${art}`);
  console.log(`\n Copyright (c) Chandresh Rajkumar Manonmani <cs1193@gmail.com> \n`)
};
