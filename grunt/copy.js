'use strict';

module.exports = {
  assets: {
    cwd:    'src/assets/',
    src:    '**',
    dest:   '.tmp',
    expand: true
  },

  dist: {
    cwd:    '.tmp',
    src:    '**',
    dest:   'dist',
    expand: true
  }
};
