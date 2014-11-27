describe("calendarioApp", function () {
        var calendarioctrl;
        beforeEach(module(
            'calendarioApp'
        ))
        beforeEach(inject(function ($controller) {
                calendarioctrl = $controller('calendarioCtrl' {
                    '$scope': scope
                });
            })

            describe("calendarioCtrl", function () {
                it("verifica dias", function () {
                    expect(calendarioctrl.ret.length).toBe(9);
                })
            })
        })

    (function () {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function (spec) {
            return htmlReporter.specFilter(spec);
        };

        var currentWindowOnload = window.onload;

        window.onload = function () {
            if (currentWindowOnload) {
                currentWindowOnload();
            }
            execJasmine();
        };

        function execJasmine() {
            jasmineEnv.execute();
        }

    })();