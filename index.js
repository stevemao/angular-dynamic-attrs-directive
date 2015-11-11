'use strict';

angular.module('angular-dynamic-attrs-directive').directive('dynamicAttrs', function($compile) {
    return {
        restrict: 'A',
        bindToController: true,
        controllerAs: 'ctrl',
        link: function (scope, iElement, iAttrs) {
            iAttrs.$observe('dynamicAttrs', function(value) {
                for (var prop in ctrl.dynamicAttrs) {
                    iElement.attr(prop , ctrl.dynamicAttrs[attr])
                }

                $compile(iElement.contents())(scope.$parent);
            });
        }
    };
});
