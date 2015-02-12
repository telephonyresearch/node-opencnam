// opencnam.js
//
// A simple node library for getting caller ID name information.


var exports, request, OPENCNAM_API_URI;


// Dependent libraries.
request = require('request');

// Public facing OpenCNAM API endpoint. See: http://docs.opencnam.com/
OPENCNAM_API_URI = 'https://api.opencnam.com/v2/phone/'


// Lookup the caller ID for the given phone number.
exports.lookup = function(phone_number, options, callback) {
  if (callback === undefined && typeof options === 'function') {
    callback = options;
    options = undefined;
  }

  if (options === null || typeof options !== 'object') {
    options = {};
  }

  // Validate phone_number or fail.
  if (!phone_number) {
    return callback(new Error('phone_number required.'));
  }

  phone_number = phone_number.replace(/[^\d.]/g, '');
  phone_number = phone_number.substr(phone_number.length - 10);

  if (phone_number.length != 10) {
    return callback(new Error('phone_number must be 10 digits.'));
  }

  var uri = OPENCNAM_API_URI + phone_number + '?format=text';

  if (options.account_sid) {
    uri += '&account_sid=' + encodeURIComponent(options.account_sid);
  }

  if (options.auth_token) {
    uri += '&auth_token=' + encodeURIComponent(options.auth_token);
  }

  // Query OpenCNAM, and return the resulting caller ID information.
  request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(null, body);
    } else {
      return callback(new Error('No caller ID found.'));
    }
  });

};
