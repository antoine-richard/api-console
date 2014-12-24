'use strict';

module.exports = {
  app: {
    options: {
      mangle: false
    },

    src:  '<%= concat.app.dest %>',
    dest: '.tmp/scripts/<%= package.name %>.min.js'
  },

  vendor: {
    src:  '<%= concat.vendor.dest %>',
    dest: '.tmp/scripts/<%= package.name %>-vendor.min.js'
  }
};
