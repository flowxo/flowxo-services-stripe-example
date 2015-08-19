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

service.Client = require('./client');

module.exports = service;
