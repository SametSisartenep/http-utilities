var hardCodes = require('./stat-codes.json'),
  tinyCodes = require('./tiny-status-codes.json'),
  drMime = require('dr-mime');

var httpUtils = function () {};

module.exports = exports = function ( type ) {
  var codes = null;

  if (type)
  {
    if (type === 'tiny')
    {
      codes = tinyCodes;
    }
    else if (type === 'hard')
    {
      codes = hardCodes;
    }
    else
    {
      throw new Error('type [' + type + '] doesn\'t exist');
    }
  }
  else
  {
    codes = hardCodes;
  }

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

  return new httpUtils();
};