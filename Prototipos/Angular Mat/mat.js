angular.module('textFieldDemo1', ['ngMaterial'])

/**
 *  Simple controller to build a `user` data model
 *  that will be used to databinding with `<tf-float>` directives
 */
.controller('DemoController', function($scope) {
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