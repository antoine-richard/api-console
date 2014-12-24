'use strict';

module.exports = function (grunt) {
  require('./grunt/tasks/cssprefix')(grunt);
  require('./grunt/tasks/smartwatch')(grunt);
  require('load-grunt-config')(grunt, {
    data: {
      appJsFiles: [
        'src/app/app.js',
        'src/app/**/*.js',
        'src/common/**/*.js',
        'src/vendor/**/*.js'
      ],
      vendorJsFiles: [
        'bower_components/marked/lib/marked.js',
        'bower_components/highlightjs/highlight.pack.js',
        'bower_components/vkbeautify/vkbeautify.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/velocity/velocity.js',
        'bower_components/raml-js-parser/dist/raml-parser.js',
        'bower_components/crypto-js/rollups/hmac-sha1.js',
        'bower_components/crypto-js/components/enc-base64.js',
        'bower_components/codemirror/lib/codemirror.js',
        'bower_components/codemirror/mode/javascript/javascript.js',
        'bower_components/codemirror/mode/xml/xml.js',
        'bower_components/codemirror/mode/yaml/yaml.js',
        'bower_components/codemirror/addon/dialog/dialog.js',
        'bower_components/codemirror/addon/search/search.js',
        'bower_components/codemirror/addon/search/searchcursor.js',
        'bower_components/codemirror/addon/lint/lint.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-codemirror/ui-codemirror.js',
        'bower_components/angular-marked/angular-marked.js',
        'bower_components/angular-highlightjs/angular-highlightjs.js'
      ]
    }
  });
};
