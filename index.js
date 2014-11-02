var codes = require('./stat-codes.json'),
  drMime = require('dr-mime');

var httpMethods = ['GET', 'POST', 'PUT', 'DELETE'];

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
