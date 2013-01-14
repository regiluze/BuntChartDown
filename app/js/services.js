'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('projectService', []).
    factory('db', function() {
    var projects = [{name:"erlea Core",points:"300" ,hours:"400"},{name:"Laboratorio",points:"400" ,hours:"500"}];

    var modify = {};
    modify.addProject = function(project) {
        projects.push(project);
        return 'added item';
    };

    modify.getProject = function() {
        return projects;
    }
    return modify;
});
