angular.module('sidenavDemo1', ['ngMaterial', 'ngRoute'])
    .controller('AppCtrl', function($scope, $timeout, $mdSidenav) {

        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle();

        };
    })
    .controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
        $scope.close = function() {
            $mdSidenav('left').close();

        };
    })

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ListaElementos',
            templateUrl: 'elementos.html'
        }).otherwise({
            redirectTo: '/'
        });
})

.controller('ListaElementos', function($scope) {
    $scope.listaAcomodacoes = [{
        titulo: 'Quarto 1',
        disponibilidade: "desocupado"
    }, {
        titulo: 'Quarto 2',
        disponibilidade: "ocupado"
    }, {
        titulo: 'Quarto 3',
        disponibilidade: "desocupado"
    }];


    $scope.mudar = function(acomodacao, desocupar) {
        if (desocupar)
            acomodacao.disponibilidade = "desocupado";
        else
            acomodacao.disponibilidade = "ocupado";
    }
})
