/** @flow */

var Color = require('../helpers/Color');
var _ = require('lodash');

var Colors = _.mapValues(
  {
    accent: '#ff6817',
    black: '#000',
    gray1: '#eee',
    gray2: '#ccc',
    gray3: '#999',
    gray4: '#666',
    white: '#fff',
  },
  value => new Color(value)
);

window.Color = Color;

module.exports = Colors;
