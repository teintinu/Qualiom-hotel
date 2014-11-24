angular.module('listadeQuartos', [])
    .value('fbURL', 'https://angularjs-projects.firebaseio.com/')

.factory('Projects', function($firebase, fbURL) {
    return $firebase(new Firebase(fbURL)).$asArray();
})
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ListCtrl',
                templateUrl: 'list.html'
            })
            .when('/edit/:projectId', {
                controller: 'EditCtrl',
                templateUrl: 'detail.html'
            })
            .when('/new', {
                controller: 'CreateCtrl',
                templateUrl: 'detail.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('listadeQuartosControler', ['$scope',
        function($scope) {

            $scope.listaAcomodacoes = [{
                titulo: 'Quarto 1',
                nome: '',
                dataInicio: '',
                dataTermino: '',
                disponibilidade: "desocupado"
            }, {
                titulo: 'Quarto 2',
                nome: 'Jose Augusto Batista Neto',
                dataInicio: '22/11/2014',
                dataTermino: '25/11/2014',
                disponibilidade: "ocupado"
            }, {
                titulo: 'Quarto 3',
                nome: '',
                dataInicio: '',
                dataTermino: '',
                disponibilidade: "desocupado"
            }];

            $scope.mudar = function(acomodacao, desocupar) {
                if (desocupar)
                    acomodacao.disponibilidade = "desocupado";
                else
                    acomodacao.disponibilidade = "ocupado";
            }




        }
    ]);