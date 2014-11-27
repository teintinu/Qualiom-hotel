$aplicacao = angular.module('aplicacao', []);

$aplicacao.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        controller: listController,
        templateUrl: 'lista.html'
    }).
    when('/editar/:name', {
        controller: editController,
        templateUrl: 'form.html'
    }).
    when('/novo', {
        controller: newController,
        templateUrl: 'form.html'
    }).
    otherwise({
        redirectTo: '/'
    });
});

$aplicacao.run(function ($rootScope) {
    $rootScope.acomodacoes = ["Quartos", "Suites", "Albergues"];
});

function listController($scope) {

}

function editController($scope, $location, $routeParams) {
    $scope.title = "Editar quartos";
    $scope.quarto = $routeParams.name;
    $scope.quartoIndex = $scope.quartos.indexOf($scope.quarto);
    $scope.salvar = function () {
        $scope.quartos[$scope.quartoIndex] = $scope.quarto;
        $location.path('/');
    }
}

function newController($scope, $location) {
    $scope.title = "Novo quarto";
    $scope.quarto = "";
    $scope.salvar = function () {
        $scope.quartos.push($scope.quarto);
        $location.path('/');
    }
}