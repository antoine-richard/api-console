'use strict';

module.exports = {
  'default': [
    'serve:development'
  ],

  'release': [
    'build:release'
  ],

  'serve:development': [
    'build:development',
    'connect:development',
    'smartwatch:jshint:index:styles:development'
  ],

  'serve:production': [
    'build:production',
    'connect:production',
    'smartwatch:jshint:index:styles:app:vendor:assets:production'
  ],

  'serve:release': [
    'build:release',
    'connect:release:keepalive'
  ],

  'build:development': [
    'env:development',
    'jshint',
    'clean:tmp',
    'concurrent:development'
  ],

  'build:production': [
    'env:production',
    'jshint',
    'clean:tmp',
    'concurrent:production',
  ],

  'build:release': [
    'build:production',
    'clean:dist',
    'copy:dist'
  ],

  'build:index': [
    'preprocess:index',
    'concat:index'
  ],

  'build:styles': [
    'sass',
    'cssprefix',
    'cssmin'
  ],

  'build:app': [
    'ngtemplates',
    'concat:app',
    'uglify:app',
    'clean:ngtemplates'
  ],

  'build:vendor': [
    'concat:vendor',
    'uglify:vendor'
  ],

  'regression': [
    'build',
    'protractor:local'
  ]
};
