var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
    console.log('NG');
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/docstrange', {
        templateUrl: 'views/strange.html',
        controller: 'StrangeController as sc'
    }).when('/laracroft', {
        templateUrl: 'views/croft.html',
        controller: 'CroftController as cc'
    }).when('/motherofdragons', {
        templateUrl: 'views/dany.html',
        controller: 'DanyController as dc'
    }).otherwise('/');

    // this is only for removing #!
    $locationProvider.html5Mode(true);
});