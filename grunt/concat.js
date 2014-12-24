'use strict';

module.exports = {
  index: {
    options: {
      process: true
    },

    src:  '<%= preprocess.index.dest %>',
    dest: '<%= preprocess.index.dest %>'
  },

  app: {
    dest: '.tmp/scripts/<%= package.name %>.js',
    src:  [
      '<%= appJsFiles %>',
      '<%= ngtemplates.ramlConsole.dest %>'
    ]
  },

  vendor: {
    dest: '.tmp/scripts/<%= package.name %>-vendor.js',
    src:  '<%= vendorJsFiles %>'
  }
};
