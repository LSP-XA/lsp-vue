const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function(config) {
  const forkTsChecker = config.plugins.find(plugin => plugin instanceof ForkTsCheckerWebpackPlugin)
  if (forkTsChecker) {
    forkTsChecker.vue.enabled = false
  }
}
