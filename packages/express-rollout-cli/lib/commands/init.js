const main = async args => {
  console.log('main');
};

module.exports = {
  command: 'init',
  describe: 'To init a profile for feature rollout',
  handler: main
}
