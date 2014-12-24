'use strict';

module.exports = {
  options: {
    sourcemap: 'none'
  },

  app: {
    src:  'src/scss/main.scss',
    dest: '.tmp/styles/<%= package.name %>.css'
  }
};
