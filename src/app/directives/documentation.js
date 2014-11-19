(function () {
  'use strict';

  RAML.Directives.documentation = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/documentation.tpl.html',
      replace: true,
      controller: function($scope) {
        $scope.unique = function (arr) {
          return arr.filter (function (v, i, a) { return a.indexOf (v) === i; });
        };

        $scope.parameterDocumentation = function (parameter) {
          var result = '';

          if (parameter.required) {
            result += 'required, ';
          }

          if (parameter.enum) {
            var enumValues = $scope.unique(parameter.enum);

            if (enumValues.length > 1) {
              result += 'one of ';
            }

            result += '(' + enumValues.join(', ') + ')';

          } else {
            result += parameter.type;
          }

          if (parameter.pattern) {
            result += ' matching ' + parameter.pattern;
          }

          if (parameter.minLength && parameter.maxLength) {
            result += ', ' + parameter.minLength + '-' + parameter.maxLength + ' characters';
          } else if (parameter.minLength && !parameter.maxLength) {
            result += ', at least ' + parameter.minLength + ' characters';
          } else if (parameter.maxLength && !parameter.minLength) {
            result += ', at most ' + parameter.maxLength + ' characters';
          }


          if (parameter.minimum && parameter.maximum) {
            result += ' between ' + parameter.minimum + '-' + parameter.maximum;
          } else if (parameter.minimum && !parameter.maximum) {
            result += ' ≥ ' + parameter.minimum;
          } else if (parameter.maximum && !parameter.minimum) {
            result += ' ≤ ' + parameter.maximum;
          }

          if (parameter.repeat) {
            result += ', repeatable';
          }

          if (parameter['default']) {
            result += ', default: ' + parameter['default'];
          }

          return result;
        };

        $scope.toggleTab = function ($event) {
          var $this        = jQuery($event.currentTarget);
          var $eachTab     = $this.parent().children('.toggle-tab');
          var $panel       = $this.closest('.resource-panel');
          var $eachContent = $panel.find('.resource-panel-content');

          if (!$this.hasClass('is-active')) {
            $eachTab.toggleClass('is-active');
            $eachContent.toggleClass('is-active');
          }
        };

        $scope.changeType = function ($event, type, code) {
          var $this        = jQuery($event.currentTarget);
          var $panel       = $this.closest('.resource-body-heading');
          var $eachContent = $panel.find('span');

          $eachContent.removeClass('isActive');
          $this.addClass('isActive');

          $scope.responseInfo[code].currentType = type;
        };

        $scope.changeResourceBodyType = function ($event, type) {
          var $this        = jQuery($event.currentTarget);
          var $panel       = $this.closest('.request-body-heading');
          var $eachContent = $panel.find('span');

          $eachContent.removeClass('isActive');
          $this.addClass('isActive');

          $scope.currentBodySelected = type;
        };

        $scope.showSchema = function ($event) {
          var $this   = jQuery($event.currentTarget);
          var $panel  = $this.closest('.resource-panel');
          var $schema = $panel.find('.resource-pre-toggle');

          $this.toggleClass('is-active');

          if (!$schema.hasClass('is-active')) {
            $this.text('Hide Schema');
            $schema
              .addClass('is-active')
              .velocity('slideDown');
          } else {
            $this.text('Show Schema');
            $schema
              .removeClass('is-active')
              .velocity('slideUp');
          }
        };
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('documentation', RAML.Directives.documentation);
})();