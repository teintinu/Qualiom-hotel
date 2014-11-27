module.exports = function (config) {
    config.set({
        files: [
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'Prototipos/Testes_AngularJS_Ramon/Exemplo_com_Controler/javascript.js',
      'Prototipos/Testes_AngularJS_Ramon/Exemplo_com_Controler/javascriptSpec.js'
    ],
        basePath: '../../../',
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['Chrome'],
        autoWatch: false,
        singleRun: true,
        colors: true
    });
};