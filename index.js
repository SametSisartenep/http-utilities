var codes = require('./stat-codes.json'),
  drMime = require('dr-mime');

function statCode ( name ) {
  return codes[name];
}

function statName ( code ) {
  for (var key in codes)
  {
    if (codes[key] === code)
    {
      return key;
    }
  }
  return false;
}
