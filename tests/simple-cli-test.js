#!/usr/bin/env js

/*
   **********************************************************************
   WARNING:

     * tests for the professional tier will be charged to your account

     * tests for the hobbyist tier will count towards your hourly limit
   **********************************************************************

   The Professional tier will only be tested if OPENCNAM_ACCOUNT_SID and
   OPENCNAM_AUTH_TOKEN are defined in your environment.

 */

var opencnam = require('opencnam');

var phonenumber = process.argv.slice(2)[0];
if (!phonenumber) {
    console.error("\nA phone number is required as an argument.");
    console.error("Aborting.\n");
    process.exit(1);
    }

var options = { 
    account_sid: process.env["OPENCNAM_ACCOUNT_SID"],
    auth_token: process.env["OPENCNAM_AUTH_TOKEN"]
    };  

options.set = (options.account_sid && options.auth_token) ? true:false;
console.log('\n');

if (options.set) {
    opencnam.lookup(phonenumber, options, function (err, cnam) {
        console.log("==> Testing professional tier...");
        if (!err){
            console.log(cnam);
        } else {
            console.log(err);
        }
        console.log("OPENCNAM_ACCOUNT_SID and OPENCNAM_AUTH_TOKEN not set in the environment.");
        console.log("Professional tier will not be tested.\n");
    });
} else {
    console.log("\n");
}

opencnam.lookup(phonenumber, opts, function (err, cnam) {
    console.log("==> Testing hobbyist tier with new signature...");
    if (!err){
        console.log(cnam);
    } else {
        console.log(err);
    }
    console.log('\n');
});

var opts;
opencnam.lookup(phonenumber, function (err, cnam) {
    console.log("==> Testing hobbyist tier with old signature...");
    if (!err){
        console.log(cnam);
    } else {
        console.log(err);
    }
    console.log('\n');
});

