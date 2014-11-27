angular.module('myApp', [])
    .controller('petsCtrl', ['$scope',
        function($scope) {

            $scope.pets = [{
                name: ' zé',
                age: 10
            }, {
                name: 'Marcello',
                age: 11
            }, {
                name: 'Soneca',
                age: 09
            }];

        }
    ]);
