angular.module('AcomodacoesApp', [])
    .controller('AcomodacoesController', ['$scope',
        function($scope) {

            $scope.acomodacoes = [{
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

            $scope.listaAcomodacoes = function() {
                if ($scope.soDisponiveis) {
                    var ret = [];
                    $scope.acomodacoes.forEach(function(acomod) {
                        if (acomod.disponibilidade == "desocupado")
                            ret.push(acomod);
                    });
                    return ret;
                } else
                    return $scope.acomodacoes;
            }
        }
    ]);