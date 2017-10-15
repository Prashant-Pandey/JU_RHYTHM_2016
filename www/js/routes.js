angular.module('app.routes', []).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('welcome', {
        url: '/side-menu21',
        abstract: true,
        templateUrl: 'templates/welcome.html',
        controller: 'menuCtrl'
    }).state('welcome.hOME', {
        url: '/home',
        views: {'side-menu21': {templateUrl: 'templates/home.html', controller: 'homeCtrl'}}
    }).state('welcome.eventFilter', {
        url: '/eventsFiltered/:main_cat',
        views: {'side-menu21': {templateUrl: 'templates/eventsFiltered.html', controller: 'homeCtrl'}}
    }).state('welcome.main-events', {
        url: '/mainevents',
        views: {'side-menu21': {templateUrl: 'templates/main_cat_events.html', controller: 'mainEventCtrl'}}
    }).state('welcome.events', {
        url: '/events',
        views: {'side-menu21': {templateUrl: 'templates/events.html', controller: 'eventsCtrl'}}
    }).state('welcome.event', {
        url: '/events/:eventId',
        views: {'side-menu21': {templateUrl: 'templates/event.html', controller: 'eventsCtrl'}}
    }).state('welcome.calender', {
        url: '/calender',
        views: {'side-menu21': {templateUrl: 'templates/calender.html', controller: 'calenderCtrl'}}
    }).state('welcome.sponsors', {
        url: '/sponsors',
        views: {'side-menu21': {templateUrl: 'templates/sponsors.html', controller: 'sponsorsCtrl'}}
    }).state('welcome.gallery', {
        url: '/gallery',
        views: {'side-menu21': {templateUrl: 'templates/gallery.html', controller: 'galleryCtrl'}}
    }).state('welcome.contactUs', {
        url: '/contact',
        views: {'side-menu21': {templateUrl: 'templates/contactUs.html', controller: 'contactUsCtrl'}}
    }).state('welcome.aboutJU-Rhythm', {
        url: '/abtrhythm',
        views: {'side-menu21': {templateUrl: 'templates/aboutJU-Rhythm.html', controller: 'aboutJU-RhythmCtrl'}}
    }).state('welcome.aboutUs', {
        url: '/abtus',
        views: {'side-menu21': {templateUrl: 'templates/about-us.html', controller: 'abtusCtrl'}}
    }).state('welcome.brochures', {
        url: '/brochures',
        views: {'side-menu21': {templateUrl: 'templates/ebrochure.html', controller: 'ebrochureCtrl'}}
    });
    $urlRouterProvider.otherwise('/side-menu21/home');
});
