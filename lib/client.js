'use strict';

var stripe = require('stripe')();

var StripeClient = function(credentials, service) {
  this.service = service;
  this.credentials = credentials;
  this.stripe = stripe;
  this.stripe.setTimeout(30000);
};

var isoifyDateField = function(field) {
  return new Date(field * 1000).toISOString();
};

var convertDateFields = function(field, props) {
  props.forEach(function(prop) {
    if(field[prop]) {
      field[prop] = isoifyDateField(field[prop]);
    }
  });
  return field;
};

StripeClient.prototype.getCustomers = function() {
  return stripe.customers.list({
    limit: 10
  }, this.credentials.access_token).then(function(response) {
    return response.data.map(function(field) {
      convertDateFields(field, ['created']);
      return field;
    });
  });

};



StripeClient.prototype.getCustomer = function(id) {
  return stripe.customers
    .retrieve(id, this.credentials.access_token)
    .then(function(customer) {
      if(customer.created) {
        customer.created = isoifyDateField(customer.created);
      }
      return customer;
    });
};

module.exports = StripeClient;
