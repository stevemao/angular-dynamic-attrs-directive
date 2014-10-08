'use strict';

angular.module('ioki.angular-dynamic-attrs-directive').directive('dynamicAttrs', function($compile) {
    return {
        restrict: 'A',
        scope: {
            'dynamicAttrs': '='
        },
        link: function(scope, elt, attrs) {
            for (var attr in scope.dynamicAttrs) {
                elt.attr( attr , scope.dynamicAttrs[attr])
            }
            elt.removeAttr('dynamic-attrs');
            elt.html(elt.prop('outerHTML'));
            $compile(elt.contents())(scope.$parent);
        }
    };
});
