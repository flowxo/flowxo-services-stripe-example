'use strict';

var config = {
  name: 'New Customer',
  slug: 'new_customer',
  type: 'poller',
  kind: 'trigger',
  scripts: {
    run: require('./run')
  },
  fields: {
    input: [],
    output: [{
      key: 'id',
      label: 'Customer ID'
    }, {
      key: 'created',
      label: 'Created At'
    }, {
      key: 'livemode',
      label: 'Live Mode'
    }, {
      key: 'description',
      label: 'Description'
    }, {
      key: 'email',
      label: 'Email'
    }, {
      key: 'delinquent',
      label: 'Customer Delinquent'
    }, {
      key: 'subscriptions__total_count',
      label: 'Subscription Count'
    }, {
      key: 'subscriptions__url',
      label: 'Subscription Url'
    }, {
      key: 'subscriptions__data__0__id',
      label: 'Subscription ID'
    }, {
      key: 'subscriptions__data__0__plan__interval',
      label: 'Subscription Plan Interval'
    }, {
      key: 'subscriptions__data__0__plan__name',
      label: 'Subscription Plan Name'
    }, {
      key: 'subscriptions__data__0__plan__created',
      label: 'Subscription Plan Created On'
    }, {
      key: 'subscriptions__data__0__plan__amount',
      label: 'Subscription Plan Amount'
    }, {
      key: 'subscriptions__data__0__plan__currency',
      label: 'Subscription Plan Currency'
    }, {
      key: 'subscriptions__data__0__plan__id',
      label: 'Subscription Plan ID'
    }, {
      key: 'subscriptions__data__0__plan__object',
      label: 'Subscription Plan Object'
    }, {
      key: 'subscriptions__data__0__plan__livemode',
      label: 'Subscription Plan LiveMode'
    }, {
      key: 'subscriptions__data__0__plan__interval_count',
      label: 'Subscription Plan Interval Count'
    }, {
      key: 'subscriptions__data__0__plan__trial_period_days',
      label: 'Subscription Plan Trial Period Days'
    }, {
      key: 'subscriptions__data__0__plan__statement_descriptor',
      label: 'Subscription Plan Statement Description'
    }, {
      key: 'subscriptions__data__0__object',
      label: 'Subscription Plan Object'
    }, {
      key: 'subscriptions__data__0__start',
      label: 'Subscription Plan Start'
    }, {
      key: 'subscriptions__data__0__status',
      label: 'Subscription Plan Status'
    }, {
      key: 'subscriptions__data__0__customer',
      label: 'Subscription Plan Customer'
    }, {
      key: 'subscriptions__data__0__cancel_at_period_end',
      label: 'Subscription Plan Cancel At Period End'
    }, {
      key: 'subscriptions__data__0__current_period_start',
      label: 'Subscription Plan Period Start'
    }, {
      key: 'subscriptions__data__0__current_period_end',
      label: 'Subscription Plan Period End'
    }, {
      key: 'subscriptions__data__0__ended_at',
      label: 'Subscription Plan Ended At'
    }, {
      key: 'subscriptions__data__0__trial_start',
      label: 'Subscription Plan Trial Start'
    }, {
      key: 'subscriptions__data__0__trial_end',
      label: 'Subscription Plan Trial End'
    }, {
      key: 'subscriptions__data__0__canceled_at',
      label: 'Subscription Plan Cancelled At'
    }, {
      key: 'subscriptions__data__0__quantity',
      label: 'Subscription Plan Quantity'
    }, {
      key: 'subscriptions__data__0__application_fee_percent',
      label: 'Subscription Plan Application Fee Percent'
    }, {
      key: 'subscriptions__data__0__discount',
      label: 'Subscription Plan Discount'
    }, {
      key: 'subscriptions__data__0__tax_percent',
      label: 'Subscription Plan Tax Percent'
    }, {
      key: 'discount',
      label: 'Discount'
    }, {
      key: 'account_balance',
      label: 'Account Balance'
    }, {
      key: 'currency',
      label: 'Currency'
    }, {
      key: 'sources__total_count',
      label: 'Total Sources'
    }, {
      key: 'sources__url',
      label: 'Payment Sources Url'
    }, {
      key: 'sources__data__0__id',
      label: 'Active Card ID'
    }, {
      key: 'sources__data__0__object',
      label: 'Active Card Object'
    }, {
      key: 'sources__data__0__last4',
      label: 'Active Card Last4'
    }, {
      key: 'sources__data__0__brand',
      label: 'Active Card Type'
    }, {
      key: 'sources__data__0__funding',
      label: 'Active Card Funding'
    }, {
      key: 'sources__data__0__exp_month',
      label: 'Active Card Exp Month'
    }, {
      key: 'sources__data__0__exp_year',
      label: 'Active Card Exp Year'
    }, {
      key: 'sources__data__0__fingerprint',
      label: 'Active Card Fingerprint'
    }, {
      key: 'sources__data__0__country',
      label: 'Active Card Country'
    }, {
      key: 'sources__data__0__name',
      label: 'Active Card Name'
    }, {
      key: 'sources__data__0__address_line1',
      label: 'Active Card Address Line1'
    }, {
      key: 'sources__data__0__address_line2',
      label: 'Active Card Address Line2'
    }, {
      key: 'sources__data__0__address_city',
      label: 'Active Card City'
    }, {
      key: 'sources__data__0__address_state',
      label: 'Active Card State'
    }, {
      key: 'sources__data__0__address_zip',
      label: 'Active Card Zip'
    }, {
      key: 'sources__data__0__address_country',
      label: 'Active Card Country'
    }, {
      key: 'sources__data__0__cvc_check',
      label: 'Active Card Cvc Checked'
    }, {
      key: 'sources__data__0__address_line1_check',
      label: 'Active Card Address Line1 Checked'
    }, {
      key: 'sources__data__0__address_zip_check',
      label: 'Active Card Zip Checked'
    }, {
      key: 'sources__data__0__customer',
      label: 'Active Card Customer'
    }, {
      key: 'default_source',
      label: 'Default Payment Source'
    }]
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
