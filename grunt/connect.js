'use strict';

module.exports = {
  options: {
    hostname:   '0.0.0.0',
    port:       9000,
    livereload: true,
    open:       true
  },

  development: {
    options: {
      middleware: function (connect) {
        return [
          connect().use('/',                 connect.static('.tmp')),
          connect().use('/',                 connect.static('src/assets')),
          connect().use('/',                 connect.static('src/app')),
          connect().use('/src',              connect.static('src')),
          connect().use('/bower_components', connect.static('bower_components'))
        ];
      }
    }
  },

  production: {
    options: {
      base: '.tmp'
    }
  },

  release: {
    options: {
      livereload: false,
      base:       'dist'
    }
  }
};
