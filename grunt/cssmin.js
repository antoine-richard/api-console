'use strict';

module.exports = {
  styles: {
    src:  '<%= sass.app.dest %>',
    dest: '.tmp/styles/<%= package.name %>.min.css'
  }
};
