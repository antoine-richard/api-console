(function () {
  'use strict';

  RAML.Directives.theme = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/theme-switcher.tpl.html',
      replace: true,
      link: function($scope, $element) {
        var parent = $element;
        while (parent && !parent.hasClass('raml-console')) {
          parent = parent.parent();
        }

        $element.on('click', function() {
          parent.toggleClass('raml-console-dark');
        });
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('themeSwitcher', RAML.Directives.theme);
})();
