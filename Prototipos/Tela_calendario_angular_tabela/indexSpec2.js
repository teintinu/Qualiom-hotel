describe("Testando tela calendario", function () {

    beforeEach(module('calendarioApp'));

    it("Tesntando controller", inject(function ($controller, $rootScope) {
        var ctrl = $controller('calendarioCtrl', {
            $scope: $rootScope
        });
        expect($rootScope.dias_primeiro_dia).toBe(1);
    }));

    it("Tesntando arrayDias", inject(function ($controller, $rootScope) {
        var ctrl = $controller('calendarioCtrl', {
            $scope: $rootScope
        });
        expect($rootScope.dias).addExpectationResult(10);
    }));
});