'use strict';

/* Directives */


angular.module('buntchart.directives', []).
    directive('chartDown', function() {

        return function($scope, $element, $attrs) {

            var chart = new google.visualization.AreaChart($element[0]);
            $scope.$watch($attrs.chartDown, function(value) {
                var data = google.visualization.arrayToDataTable(value);

                var options = {
                    hAxis: {title: 'Hours',  titleTextStyle: {color: 'blue'}},
                    vAxis: {title: 'Points',  titleTextStyle: {color: 'blue'}}
                };

                chart.draw(data, options);
            });


        }
    });
