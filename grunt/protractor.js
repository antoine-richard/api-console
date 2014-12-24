'use strict';

module.exports = {
  options: {
    configFile: 'test/regression/protractor.conf.js',
    keepAlive:  false,
    args:       {
      browser: process.env.TRAVIS ? 'firefox' : 'chrome'
    }
  },

  regression: {
  },

  local: {
    options: {
      configFile: 'test/regression/local.protractor.conf.js'
    }
  }
};
