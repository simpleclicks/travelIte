// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic'])

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

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'login.html',
                controller: 'LoginCtrl'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'home.html'
            })

            .state('timeline', {
                url: '/timeline',
                templateUrl: 'timeline.html'
            })

            .state('travelmates', {
                url: '/travelmates',
                templateUrl: 'travelmates.html'
            })

            .state('persondetails', {
                url: '/persondetails',
                templateUrl: 'persondetails.html'
            })
        ;

        // if none of the above states are matched, use this as the fallback

        $urlRouterProvider.otherwise('/login');


    })
    .controller('LoginCtrl', function($scope, $state) {
        $scope.fbLogin = function() {
            openFB.login(
                function(response) {
                    if (response.status === 'connected') {
                        console.log('Facebook login succeeded');
                        $state.go('home');
                    } else {
                        alert('Facebook login failed');
                    }
                },
                {scope: 'email,publish_actions'});
        }
    });

