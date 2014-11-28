var calendarioApp = angular.module('calendarioApp', ['hmTouchEvents']);

calendarioApp.controller("calendarioCtrl", ['$scope',
            function ($scope) {

        var retDias = [];
        var retQuartos = [];
        $scope.dias_primeiro_dia = 1;
        $scope.qtdeQuarto = 1;

        for (var i = $scope.qtdeQuarto; i <= $scope.qtdeQuarto + 8; i++) {
            var quarto = {
                quarto: "quarto" + i
            };
            retQuartos.push(quarto);
        }


        for (var i = $scope.dias_primeiro_dia; i <= $scope.dias_primeiro_dia + 8; i++) {
            var data = {
                data: i + "/11"
            };
            retDias.push(data);
        }


        $scope.dias = retDias;
        $scope.quartos = retQuartos;

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

        $scope.disponibilade = function (quarto, dia) {
            var disponivel = Math.random() > 0.5;
            return disponivel ? "-" : "X";
        }
}]);