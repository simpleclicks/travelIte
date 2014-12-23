angular.module('travelIte.controllers')
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
            {scope: 'email,user_friends'});
    }
});