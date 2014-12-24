'use strict';

module.exports = {
  ramlConsole: {
    options: {
      module: 'ramlConsoleApp'
    },

    cwd:  'src/app',
    src:  '**/*.tpl.html',
    dest: '.tmp/scripts/<%= package.name %>-templates.js'
  }
};
