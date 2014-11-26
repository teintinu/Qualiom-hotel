var calendarioApp = angular.module('calendarioApp', ['hmTouchEvents']);

calendarioApp.controller("calendarioCtrl", ['$scope',
            function ($scope) {

        $scope.dias_primeiro_dia = 1;
        $scope.dias = function () {
            var ret = [];
            for (var i = $scope.dias_primeiro_dia; i <= $scope.dias_primeiro_dia + 8; i++) {
                var data = i + "/11";
                ret.push(data);
            }
            return ret;
        };

        $scope.onHammerPinch = function onHammer(event) {
            $scope.$apply(function () {});
        };


        $scope.onHammerRigth = function onHammer(event) {
            $scope.$apply(function () {
                $scope.dias_primeiro_dia--;
            });
        };

        $scope.onHammerLeft = function onHammer(event) {
            $scope.$apply(function () {
                $scope.dias_primeiro_dia++;
            });
        };

        $scope.onHammerDown = function onHammer(event) {
            $scope.$apply(function () {
                $scope.qtdeQuarto--;
            });
        };

        $scope.onHammerUp = function onHammer(event) {
            $scope.$apply(function () {
                $scope.qtdeQuarto++;
            });
        };

        $scope.qtdeQuarto = 1;
        $scope.quartos = function () {
            var ret = [];
            for (var i = $scope.qtdeQuarto; i <= $scope.qtdeQuarto + 8; i++) {
                var quarto = "quarto" + i;
                ret.push(quarto);
            }
            return ret;
        };

        $scope.disponibilade = function (quarto, dia) {
            var disponivel = Math.random() > 0.5;
            return disponivel ? "-" : "X";
        }
}]);