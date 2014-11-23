angular.module('listadeQuartos', [])
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