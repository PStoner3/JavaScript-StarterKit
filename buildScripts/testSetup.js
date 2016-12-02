// This file is not transpiled. CommonJS and ES5 must be used

// Register Babel to transpile before our test runs
require('babel-register')();

// Disable webpack features that Mocha can't handle
require.extensions['css'] = function () { };
