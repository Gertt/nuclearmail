/** @flow */
/* global gapi */

var API = require('../dao/API.js');
var Dispatcher = require('../dispatchers/Dispatcher.js');

function list() {
  return API.wrap(() =>
    API.execute(gapi.client.gmail.users.labels.list({userId: 'me'}))
      .then(response => response.labels)
  );
}

module.exports = {
  list,
};
