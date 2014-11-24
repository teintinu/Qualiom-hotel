var calendarioApp = angular.module("calendarioApp", []);

var calendarioCtrl = calendarioApp.controller("calendarioCtrl", ['$scope',
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

        $scope.scrollPraTras = function () {
            $scope.dias_primeiro_dia--;
        };

        $scope.scrollPraFrente = function () {
            $scope.dias_primeiro_dia++;
        };

        $scope.scrollPraCima = function () {
            $scope.qtdeQuarto--;
        }

        $scope.scrollPraBaixo = function () {
            $scope.qtdeQuarto++;
        }

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