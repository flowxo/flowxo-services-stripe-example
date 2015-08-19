## New Customer Trigger Test Cases

These tests retrieves a new customers from stripe
* Run the method using `grunt run`. Select the method "New Customer"
* 

### should populate poller cache with customers
    * run the 'New Customer' method to populate the cache

```

Method Selection
----------------
? Method: New Customer

DATA:
---------------
[]

LABELLED:
-------------------
[]
```


### should retrieve new customers
    * run the add customer method to create a new customer
    * run the new customer trigger to retrieve the new customer

```

Method Selection
----------------
? Method: Add a Customer

Input Fields
------------
? Email*: me@newcustomer.com
? Description*: some new customer

DATA:
---------------
{
  "id": "cus_6PFwgbikNhpUSl"
}

LABELLED:
-------------------
{
  "Customer ID": "cus_6PFwgbikNhpUSl"
}


Method Selection
----------------
? Method: New Customer

DATA:
---------------
[
  {
    "object": "customer",
    "created": 1434012750,
    "id": "cus_6PFwgbikNhpUSl",
    "livemode": false,
    "description": "some new customer",
    "email": "me@newcustomer.com",
    "delinquent": false,
    "metadata": {},
    "subscriptions": {
      "object": "list",
      "total_count": 0,
      "has_more": false,
      "url": "/v1/customers/cus_6PFwgbikNhpUSl/subscriptions",
      "data": []
    },
    "discount": null,
    "account_balance": 0,
    "currency": null,
    "sources": {
      "object": "list",
      "total_count": 0,
      "has_more": false,
      "url": "/v1/customers/cus_6PFwgbikNhpUSl/sources",
      "data": []
    },
    "default_source": null
  }
]

LABELLED:
-------------------
[
  {
    "Object": "customer",
    "Created At": 1434012750,
    "ID": "cus_6PFwgbikNhpUSl",
    "LiveMode": false,
    "Description": "some new customer",
    "Email": "me@newcustomer.com",
    "Customer Delinquent": false,
    "Subscription Count": 0,
    "Subscriptions Url": "/v1/customers/cus_6PFwgbikNhpUSl/subscriptions",
    "Subscription ID": undefined,
    "Subscription Plan Interval": undefined,
    "Subscription Plan Name": undefined,
    "Subscription Plan Created On": undefined,
    "Subscription Plan Amount": undefined,
    "Subscription Plan Currency": undefined,
    "Subscription Plan ID": undefined,
    "Subscription Plan Object": undefined,
    "Subscription Plan LiveMode": undefined,
    "Subscription Plan Interval Count": undefined,
    "Subscription Plan Trial Period Days": undefined,
    "Subscription Plan Statement Description": undefined,
    "Subscription Plan Object": undefined,
    "Subscription Plan Start": undefined,
    "Subscription Plan Status": undefined,
    "Subscription Plan Customer": undefined,
    "Subscription Plan Cancel At Period End": undefined,
    "Subscription Plan Period Start": undefined,
    "Subscription Plan Period End": undefined,
    "Subscription Plan Ended At": undefined,
    "Subscription Plan Trial Start": undefined,
    "Subscription Plan Trial End": undefined,
    "Subscription Plan Cancelled At": undefined,
    "Subscription Plan Quantity": undefined,
    "Subscription Plan Application Fee Percent": undefined,
    "Subscription Plan Discount": undefined,
    "Subscription Plan Tax Percent": undefined,
    "Discount": null,
    "Account Balance": 0,
    "Currency": null,
    "Total Sources": 0,
    "Payment Sources Url": "/v1/customers/cus_6PFwgbikNhpUSl/sources",
    "Active Card ID": undefined,
    "Active Card Object": undefined,
    "Active Card Last4": undefined,
    "Active Card Type": undefined,
    "Active Card Funding": undefined,
    "Active Card Exp Month": undefined,
    "Active Card Exp Year": undefined,
    "Active Card Fingerprint": undefined,
    "Active Card Country": undefined,
    "Active Card Name": undefined,
    "Active Card Address Line1": undefined,
    "Active Card Address Line2": undefined,
    "Active Card City": undefined,
    "Active Card State": undefined,
    "Active Card Zip": undefined,
    "Active Card Country": undefined,
    "Active Card Cvc Checked": undefined,
    "Active Card Address Line1 Checked": undefined,
    "Active Card Zip Checked": undefined,
    "Active Card Customer": undefined,
    "Default Payment Source": null
  }
]

```