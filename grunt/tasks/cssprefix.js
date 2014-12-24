'use strict';

module.exports = function cssprefixFactory(grunt) {
  grunt.registerMultiTask('cssprefix', function cssprefix() {
    this.files.forEach(workOnFile);
  });

  function workOnFile(file) {
    grunt.file.write(file.dest, file.src.map(workOnFileSource).join(''));
  }

  function workOnFileSource(file) {
    return workOnString(grunt.file.read(file));
  }

  function workOnString(string) {
    return require('rework')(string)
      .use(workOnStyle)
      .toString()
    ;
  }

  function workOnStyle(style) {
    require('rework-walk')(style, function (rule) {
      if (rule.selectors) {
        workOnRule(rule);
      }
    });
  }

  function workOnRule(rule) {
    rule.selectors = rule.selectors.map(workOnSelector);
  }

  function workOnSelector(selector) {
    if (selector.indexOf('.raml-console') === 0) {
      return selector;
    }

    return selector.split('.').map(function (part, index) {
      return (isExcluded(part, index) ? '' : 'raml-console-') + part;
    }).join('.');
  }

  function isExcluded(part, index) {
    return index === 0 || ['ng', 'CodeMirror', 'cm'].some(function (prefix) {
      return part.indexOf(prefix) === 0;
    });
  }
};
