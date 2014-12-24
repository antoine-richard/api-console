'use strict';

module.exports = {
  development: [
    'build:index',
    'build:styles'
  ],

  production: [
    'build:index',
    'build:styles',
    'build:app',
    'build:vendor',
    'copy:assets'
  ]
};
