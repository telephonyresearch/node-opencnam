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
``node-opencnam``. All it does is ask you for a phone number via the command
line, then lookup the caller ID name for the specified phone number and print
it out.

When using ``node-opencnam``, note that you can pass it any US phone number, in
any format. This means that if you enter ``'abc8182223333bcbcbc'``,
``node-opencnam`` will still resolve it to ``'8182223333'``.

If you enter a number less than 10-digits in length, you'll get an error. If
you enter a number longer than 10-digits in length, ``node-opencnam`` will only
use the last 10-digits of the number.
