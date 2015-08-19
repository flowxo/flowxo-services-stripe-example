'use strict';
var Q = require('q');

module.exports = function(options, done) {

  var client = new this.Client(options.credentials, this);
  var returnNewItems = Q.denodeify(options.poller);
  client.getCustomers()
    .then(returnNewItems)
    .nodeify(done);

};
