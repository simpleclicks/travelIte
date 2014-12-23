angular.module('travelIte', ['ionic','travelIte.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // Set the statusbar to use the default style, tweak this to
                // remove the status bar on iOS or change it to use white instead of dark colors.
                StatusBar.styleDefault();
            }
        });

        openFB.init({appId: '416103598545059'});
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })

            .state('timeline', {
                url: '/timeline',
                templateUrl: 'templates/timeline.html'
            })

            .state('travelmates', {
                url: '/travelmates',
                templateUrl: 'templates/travelmates.html'
            })

            .state('persondetails', {
                url: '/persondetails',
                templateUrl: 'templates/persondetails.html'
            })
        ;

        $urlRouterProvider.otherwise('/login');


    });

