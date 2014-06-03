// opencnam.js
//
// A simple node library for getting caller ID name information.


var exports, request, OPENCNAM_API_URI;


// Dependent libraries.
request = require('request');

// Public facing OpenCNAM API endpoint. See: http://docs.opencnam.com/
OPENCNAM_API_URI = 'https://api.opencnam.com/v2/phone/'


// Lookup the caller ID for the given phone number.
exports.lookup = function(phone_number, callback) {

  // Validate phone_number or fail.
  if (!phone_number) {
    return callback(new Error('phone_number required.'));
  }

  phone_number = phone_number.replace(/[^\d.]/g, '');
  phone_number = phone_number.substr(phone_number.length - 10);

  if (phone_number.length != 10) {
    return callback(new Error('phone_number must be 10 digits.'));
  }

  // Query OpenCNAM, and return the resulting caller ID information.
  request(OPENCNAM_API_URI + phone_number + '?format=text', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(null, body);
    } else {
      return callback(new Error('No caller ID found.'));
    }
  });

};
