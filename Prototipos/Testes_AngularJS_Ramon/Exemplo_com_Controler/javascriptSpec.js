describe("Testando controller", function () {

    beforeEach(module('MyApp'));

    it('Verifica tamanho do array', inject(function ($controller, $rootScope) {
        var ctrl = $controller('appCtrl', {
            $scope: $rootScope
        });
        expect($rootScope.quartos.length).toBe(3);
    }));
});