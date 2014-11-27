describe("calendarioApp: Testando modulos", function() {
  describe("calendarioApp", function() {

    var module;
    before(function() {
      module = angular.module("calendarioApp");
    });

    it("Registrando", function() {
      expect(module).not.to.equal(null);
    });

    describe("Dependencias:", function() {

      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
      before(function() {
        deps = module.value('appName').requires;
      });

      //you can also test the module's dependencies
      it("should have App.Controllers as a dependency", function() {
        expect(hasModule('calendarioApp.Controllers')).to.equal(true);
      });
    });
  });
});