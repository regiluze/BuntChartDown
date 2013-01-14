'use strict';

/* Controllers */



function addChartController($scope,$location,db) {
    $scope.currentUrl = $location.path();

    $scope.add = function(newProject) {
        var project = {name: newProject.name, points:newProject.points, hours: newProject.hours};
        db.addProject(project);
        window.location = "#/charts";
    };


}
//addChartController.$inject = [];


function buntChartController($scope,$location,db) {

    $scope.chartData = [
        ['Hours', 'Planning', 'Developed'],
        [0,  1000,      0],
        [500,  0,      0]
    ];

    $scope.projects = db.getProject();

    $scope.froga = { name: "elur", colour: "white/grey"};


}
//buntChart.$inject = [];
