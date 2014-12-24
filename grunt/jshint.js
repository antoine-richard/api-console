'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },

  files: [
    'Gruntfile.js',
    'grunt/**/*.js',
    'src/**/*.js',
    '!src/vendor/**/*.js',
    'test/**/*.js'
  ]
};
