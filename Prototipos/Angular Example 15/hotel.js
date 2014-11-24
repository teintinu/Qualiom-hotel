(function(angular) {
    'use strict';
    angular.module('docsIsolateScopeDirective', [])
        .controller('Controller', ['$scope',
            function($scope) {

                $scope.listaAcomodacoes = carregaElementosHotel();

            }
        ])
        .directive('hotelmostraacomodacao', function() {
            return {
                restrict: 'E',
                scope: {
                    elem: '=elemento'
                },
                templateUrl: 'templ-mostra-acomodacao.html'
            };
        })
        .directive('hoteleeditaacomodacao', function() {
            return {
                restrict: 'E',
                scope: {
                    elem: '=elemento'
                },
                templateUrl: 'templ-edita-acomodacao.html'
            };
        }).directive('draggable', ['$document',
            function($document) {
                return {
                    restrict: 'A',
                    link: function(scope, elm, attrs) {
                        var startX, startY, initialMouseX, initialMouseY;
                        elm.css({
                            position: 'absolute',
                            cursor: 'default'
                        });

                        elm.bind('mousedown', function($event) {
                            startX = elm.prop('offsetLeft');
                            startY = elm.prop('offsetTop');
                            initialMouseX = $event.clientX;
                            initialMouseY = $event.clientY;
                            $document.bind('mousemove', mousemove);
                            $document.bind('mouseup', mouseup);
                            return false;
                        });

                        function mousemove($event) {
                            var dx = $event.clientX - initialMouseX;
                            var dy = $event.clientY - initialMouseY;
                            elm.css({
                                top: startY + dy + 'px',
                                left: startX + dx + 'px'
                            });
                            return false;
                        }

                        function mouseup() {
                            $document.unbind('mousemove', mousemove);
                            $document.unbind('mouseup', mouseup);
                        }
                    }
                };
            }
        ]);
})(window.angular);


function carregaElementosHotel() {
    var ret = [];
    for (var quarto = 1; quarto <= 3; quarto++)
        ret.push(el_hotel('Quarto ' + quarto, Math.random() > 0.5, true, null));
    return ret;
}

function el_hotel(titulo, ocupado, acomodacao, conteudo) {
    return {
        titulo: titulo,
        disponibilidade: ocupado ? "ocupado" : "disponivel",
        acomodacao: acomodacao,
        conteudo: conteudo,
        ocupar: function() {
            this.disponibilidade = 'ocupado';
        },
        desocupar: function() {
            this.disponibilidade = 'disponivel';
        }
    };
}