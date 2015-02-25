/** @flow */

'use strict';

var router = require('../routers/router');

function select(message: ?Object) {
  if (message) {
    router.transitionTo(
      'thread',
      {messageID: message.id, threadID: message.threadID}
    );
  } else {
    router.transitionTo('app');
  }
}

module.exports = {
  select,
};
