'use strict';

module.exports = function(options, done) {
  var self = this;

  // Stripe has a well written and well maintained Node library.
  // Before you write a service using a wrapper, please run it past us
  // first.  But if it looks good, there's no harm in using one.

  var stripe = require('stripe')(options.credentials.access_token);

  // As we're polling for new customers, we need to get a descending time
  // ordered list of customers on the account (newest customers first) and
  // apply a sane limit depending on how frequently records are likely to
  // get added.  Usually between 50-150 is enough.  We go with 50 here.

  stripe.customers.list({
    limit: 50
  }, function(err, customers) {
    if(err) {
      done(self.handleError(err));
    } else {

      // See SAMPLE DATA below to see what 'customer' contains
      var formattedCustomers = customers.data.map(function(customer) {
        // We fix up the 'created' field using our helper method in index.js
        self.convertDateFields(customer, ['created']);
        return customer;
      });

      // Finally, we can pass the list of customers through to options.poller 
      // which will filter out any that we've seen before, and trigger
      // workflows for the new customers.

      options.poller(formattedCustomers, 'id', done);
    }
  });

};

/*
SAMPLE DATA:
{
    "object": "list",
    "has_more": false,
    "url": "/v1/customers",
    "data": [{
        "object": "customer",
        "created": 1432221783,
        "id": "cus_6HUUNybOUOBpU1",
        "livemode": false,
        "description": "New Joey",
        "email": "joey@test.com",
        "delinquent": false,
        "metadata": {},
        "subscriptions": {
            "object": "list",
            "total_count": 1,
            "has_more": false,
            "url": "/v1/customers/cus_6HUUNybOUOBpU1/subscriptions",
            "data": [{
                "id": "sub_6HUWDmYyhZR3bt",
                "plan": {
                    "interval": "month",
                    "name": "Test",
                    "created": 1432123408,
                    "amount": 999,
                    "currency": "gbp",
                    "id": "Test Subscription",
                    "object": "plan",
                    "livemode": false,
                    "interval_count": 1,
                    "trial_period_days": null,
                    "metadata": {},
                    "statement_descriptor": null
                },
                "object": "subscription",
                "start": 1432221870,
                "status": "active",
                "customer": "cus_6HUUNybOUOBpU1",
                "cancel_at_period_end": false,
                "current_period_start": 1432221870,
                "current_period_end": 1434900270,
                "ended_at": null,
                "trial_start": null,
                "trial_end": null,
                "canceled_at": null,
                "quantity": 1,
                "application_fee_percent": null,
                "discount": null,
                "tax_percent": null,
                "metadata": {}
            }]
        },
        "discount": null,
        "account_balance": 0,
        "currency": "gbp",
        "sources": {
            "object": "list",
            "total_count": 1,
            "has_more": false,
            "url": "/v1/customers/cus_6HUUNybOUOBpU1/sources",
            "data": [{
                "id": "card_164vX6AdSrpE7j6ZFiYrLAQ2",
                "object": "card",
                "last4": "1881",
                "brand": "Visa",
                "funding": "credit",
                "exp_month": 5,
                "exp_year": 2016,
                "fingerprint": "SxkIVWbTmcVM0zcf",
                "country": "US",
                "name": null,
                "address_line1": null,
                "address_line2": null,
                "address_city": null,
                "address_state": null,
                "address_zip": null,
                "address_country": null,
                "cvc_check": "pass",
                "address_line1_check": null,
                "address_zip_check": null,
                "dynamic_last4": null,
                "metadata": {},
                "customer": "cus_6HUUNybOUOBpU1"
            }]
        },
        "default_source": "card_164vX6AdSrpE7j6ZFiYrLAQ2"
    }, {
        "object": "customer",
        "created": 1432120990,
        "id": "cus_6H3OCHUR1HwQF0",
        "livemode": false,
        "description": "Test",
        "email": "flowxo.services@gmail.com",
        "delinquent": false,
        "metadata": {},
        "subscriptions": {
            "object": "list",
            "total_count": 0,
            "has_more": false,
            "url": "/v1/customers/cus_6H3OCHUR1HwQF0/subscriptions",
            "data": []
        },
        "discount": null,
        "account_balance": 0,
        "currency": "gbp",
        "sources": {
            "object": "list",
            "total_count": 0,
            "has_more": false,
            "url": "/v1/customers/cus_6H3OCHUR1HwQF0/sources",
            "data": []
        },
        "default_source": null
    }]
}
*/
