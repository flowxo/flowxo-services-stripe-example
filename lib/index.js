'use strict';

var sdk = require('flowxo-sdk');

var service = new sdk.Service({
  serviceRoot: __dirname,
  name: 'Stripe',
  slug: 'stripe',
  auth: {
    type: 'oauth2',

    // The strategy key should return the Passport Strategy for your service.
    // Passport has numerous available strategies for popular services, normally named
    // e.g. passport-facebook, passport-twitter etc
    // Example:
    // strategy: require('passport-facebook').Strategy

    strategy: require('passport-stripe').Strategy,

    // These options will be passed to the strategy when registering.
    // An OAuth 2.0 strategy requires `clientID` and `clientSecret`
    // to be passed. Fill in your ID and secret for this service in the
    // .env file and they will be populated at runtime below.
    // If your strategy requires any other options to be passed when registering,
    // add them below.

    options: {
      clientID: process.env.STRIPE_ID,
      clientSecret: process.env.STRIPE_SECRET,
      state: true
    },

    // Authentication parameters to be used.
    // These are sent when making an OAuth request.
    // For example, where an OAuth 2.0 API defines access scopes,
    // you may send
    // params:{
    //   scope: ['allow_email']
    // }

    params: {
      scope: ['read_write']
    }
  },
  scripts: {

  }
});

// Attach any service level methods to your service here, then in your methods
// you'll be able to do this.request(..).

// Here, we created a date formatting method that we can use across several
// service methods.  We need this because Stripe gives us dates as timestamps
// rather than ISO 9601 datetimes.

service.convertDateFields = function(field, props) {
  props.forEach(function(prop) {
    if(field[prop]) {
      field[prop] = new Date(field[prop] * 1000).toISOString();
    }
  });
  return field;
};

// This helps us to deal with error messages.  The Stripe Node library that
// we're using returns 5 different error types.  Flow XO expects either an
// Error (retryable/temporary error), ServiceError (validation/permanent
// failure) or AuthError (authorization problems).

service.handleError = function(err) {
  var returnError;
  switch (err.type) {
    case 'StripeCardError':
    case 'StripeInvalidRequest':
      returnError = new sdk.Error.ServiceError(err.message);
      break;
    case 'StripeAPIError':
    case 'StripeConnectionError':
      returnError = err;
      break;
    case 'StripeAuthenticationError':
      returnError = new sdk.Error.AuthError('Your connection to Stripe is no longer valid, please renew.');
      break;
  }
  return returnError;
};

module.exports = service;
