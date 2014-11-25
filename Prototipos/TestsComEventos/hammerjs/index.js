var hmTime = angular.module('hmTime', ['hmTouchEvents']);

var hmCtrl = hmTime.controller('hmCtrl', function ($scope) {
    $scope.eventType = "No events yet";
    $scope.onHammer = function onHammer(event) {
        $scope.$apply(function () {
            $scope.eventType = event.type;
        });
    };
});