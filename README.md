A simple node library for getting caller ID name information.

This library uses [opencnam](http://www.opencnam.com "opencnam") as a backend.


## Installation

Install from [npm](http://npmjs.org/ "node package manager"), the node package
manager:

    $ npm install opencnam

If you'd like to install node-opencnam globally, you can run:

    $ npm install -g opencnam

NOTE: If you install node-opencnam globally, you may need to run the ``npm``
command with ``sudo``.


## Usage

Using ``node-opencnam`` is easy. Below is a sample node program written using
``node-opencnam``. All it does is lookup a phone number and then output the
caller ID name for the specified phone number and print it out.

When using ``node-opencnam``, note that you can pass it any US phone number, in
any format. This means that if you enter ``'abc8182223333bcbcbc'``,
``node-opencnam`` will still resolve it to ``'8182223333'``.

If you enter a number less than 10-digits in length, you'll get an error. If
you enter a number longer than 10-digits in length, ``node-opencnam`` will only
use the last 10-digits of the number.

So, here it is:

``` javascript
var opencnam = require('opencnam');

opencnam.lookup('2024561111', function (err, cnam) {
  if (!err) {
    console.log(cnam);
  } else {
    console.log(err);
  }
});
```

If you're using the Professional Tier, you can pass in the account credentials via the `options` parameter:

``` javascript
var opencnam = require('opencnam');

var options = {
  account_sid: '<Account SID>',
  auth_token:  '<Auth Token>'
};

opencnam.lookup('2024561111', options, function (err, cnam) {
  if (!err) {
    console.log(cnam);
  } else {
    console.log(err);
  }
});
```


## Limits

The [opencnam](http://www.opencnam.com "opencnam") API we use as a backend
limits you to no more than 10 requests per hour (using the Free Tier).


## Changelog

v0.1.1: 2012/03/26

    - Initial release!

v0.1.2: 2015/02/26

    - Using v2 of the API

v0.1.3: 2015/05/06

    - option to use the professional tier


