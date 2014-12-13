var codes = require('./stat-codes.json'),
  drMime = require('dr-mime');

function httpUtils () {}

httpUtils.prototype = drMime;

httpUtils.prototype.statCode = function statCode ( name ) {
  return codes[name];
};

httpUtils.prototype.statName = function statName ( code ) {
  for (var key in codes)
  {
    if (codes[key] === code)
    {
      return key;
    }
  }
  return false;
};

module.exports = exports = new httpUtils();
