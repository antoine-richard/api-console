'use strict';

module.exports = function smartwatchFactory(grunt) {
  grunt.registerTask('smartwatch', function smartwatch() {
    var targets = Array.prototype.slice.call(arguments, 0);
    Object.keys(grunt.config('watch')).filter(function (target) {
      return grunt.util._.indexOf(targets, target) === -1;
    }).forEach(function (target) {
      grunt.log.writeln('Ignoring ' + target + '...');
      grunt.config(['watch', target], {files: []});
    });
    grunt.task.run('watch');
  });
};
