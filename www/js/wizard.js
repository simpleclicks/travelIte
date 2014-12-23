angular.module('travelIte.controllers')
    .controller('WizardCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
        $scope.nextSlide = function() {
            $ionicSlideBoxDelegate.next();
        }
    });