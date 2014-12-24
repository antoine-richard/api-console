'use strict';

module.exports = {
  jshint: {
    files: ['<%= jshint.files %>'],
    tasks: ['jshint:files', 'build:index']
  },

  index: {
    files: ['<%= preprocess.index.src %>'],
    tasks: ['build:index']
  },

  styles: {
    files: ['src/scss/**/*.scss'],
    tasks: ['build:styles']
  },

  app: {
    tasks: ['build:app'],
    files: [
      '<%= concat.app.src %>',
      '<%= ngtemplates.ramlConsole.src %>'
    ]
  },

  vendor: {
    files: ['<%= concat.vendor.src %>'],
    tasks: ['build:vendor']
  },

  assets: {
    files: ['src/assets/**/*'],
    tasks: ['copy:assets']
  },

  development: {
    options: {
      livereload: true,
    },

    tasks: [],
    files: [
      '.tmp/**/*',
      'src/**/*',
      '!src/index.html',
      '!src/scss/**/*'
    ]
  },

  production: {
    options: {
      livereload: true,
    },

    tasks: [],
    files: [
      '.tmp/**/*'
    ]
  }
};
