'use strict';



// Declare app level module which depends on filters, and services
var app = angular.module('buntchart', ['buntchart.filters', 'projectService', 'buntchart.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/charts', {templateUrl: 'partials/buntChart.html', controller: buntChartController});
    $routeProvider.when('/conf', {templateUrl: 'partials/addChart.html', controller: addChartController});
    $routeProvider.otherwise({redirectTo: '/charts'});
  }]);

google.setOnLoadCallback(function() {
    angular.bootstrap(document.body, ['buntchart']);
});
google.load('visualization', '1', {packages: ['corechart']});

