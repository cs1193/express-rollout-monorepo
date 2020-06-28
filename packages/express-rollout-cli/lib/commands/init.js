const art = require('../core/art');

const main = async args => {
  art();
};

module.exports = {
  command: 'init',
  describe: 'To init a profile for feature rollout',
  handler: main
}
