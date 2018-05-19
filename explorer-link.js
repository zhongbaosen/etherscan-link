const prefixForNetwork = require('./prefix-for-network')

module.exports = function (hash, network) {
  const prefix = prefixForNetwork(network)
  return `https://explorer.etherzero.org/tx/${hash}`
}
