angular.module('app.controllers', [])
    .controller('menuCtrl', function ($scope) {
        $scope.side_list = [{"name": "Home", "loc": "welcome.hOME"}, {
            "name": "Events", "loc": "welcome.events"
        },{"name": "E-Brochures", "loc": "welcome.brochures"},
            {"name": "Gallery", "loc": "welcome.gallery"},
            {"name": "Sponsors", "loc": "welcome.sponsors"},{"name": "Contact Us", "loc": "welcome.contactUs"}, {
            "name": "About JU-Rhythm", "loc": "welcome.aboutJU-Rhythm"
        }, {"name": "Contributors", "loc": "welcome.aboutUs"}]
    }).controller('eventsFilterCtrl', function ($scope, $rootScope, $http, $state) {
        $http.get('js/tec.json').success(function (response) {
            $scope.event_list = response;
        });
        $scope.myval = "1";
        $scope.cat = $state.params.main_cat;
    })
    .controller('homeCtrl', function ($scope, $rootScope, $http, $state) {
        $http.get('js/sponsors.json').success(function (response) {
            $rootScope.sponsors_list = response;
        });
        $http.get('js/tec.json').success(function (response) {
            $scope.event_list = response;
        });
        $scope.myval = "1";
        $scope.cat = $state.params.main_cat;
    }).controller('eventsCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $http.get('js/tec.json').success(function (response) {
            $scope.event_list = response;
        });
        $scope.myval = "2";
        $scope.whichEvent = $state.params.eventId;
    }]).controller('galleryCtrl', function ($scope, $http, $state) {
        $scope.items = [{src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/9_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/3_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/4_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/5_2.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/10_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/11_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/14_1.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/one.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/two.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/three.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/four.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/five.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/six.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/seven.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/eight.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/nine.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/ten.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/eleven.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/twelve.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/thirteen.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/fourteen.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/fifteen.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/sixteen.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/seventeen.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/eighteen.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/nineteen.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/twenty.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/twenty-one.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/twenty-two.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/twenty-three.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/twenty-four.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/twenty-five.JPG'}];
    }).controller('eventCtrl', function ($scope) {
    }).controller('sponsorsCtrl', function ($scope, $rootScope, $http, $state) {
        $scope.sponsors = $rootScope.sponsors_list;
    }).controller('contactUsCtrl', function ($scope) {
    }).controller('aboutJU-RhythmCtrl', function ($scope) {
        $scope.one = [{src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/9_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/3_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/4_1.jpg'}]
        $scope.two = [{src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/6_2.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/8_2.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/12.jpg'}]
        $scope.three = [{src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/13_1.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/15.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/2_2.jpg'}]
        $scope.four = [{src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/DSC_9289.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/DSC_9305.jpg'}, {src: 'http://jecrcuniversity.edu.in/media/gallery/orignal/DSC_9338.jpg'}]
    }).controller('abtusCtrl', function ($scope) {
    })
    .controller('ebrochureCtrl', function ($scope, $http, $state) {
        $scope.items = [{src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/aeromodelling.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/alfaaz.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/cantilevo.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/cartooning.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/code-blast.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/bridge.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/face-painting.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/fashion-show.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/hackathon.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/instrumental.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/gal-img/four.JPG'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/intern-fair.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/investors-dilemma.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/ipl-auction.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/junkyard-wars.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/kite-fight.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/lan-gaming.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/lets-pitch.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/line-follower.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/maze-solver.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/mehandi.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/pro-expo.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/rangoli.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/rapwar.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/rc-car.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/roadies.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/robo-soccer.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/robo-war.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/skit.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/solo-dance.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/solo-singing.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/street-dance.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/treasure-hunt.jpg'}, {src: 'http://prashant-pandey.com/app-images-and-content/ebrochures/vartalap.jpg'}];
    })