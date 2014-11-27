module.exports = function (config) {
    config.set({
        files: [
      'bower_components/angular/angular.js',
   'node_modules/angular-mocks/angular-mocks.js',
   'Prototipos/Tela_calendario_angular_tabela/lib/hammer.js',
   'Prototipos/Tela_calendario_angular_tabela/lib/angular.hammer.js',
   'Prototipos/Tela_calendario_angular_tabela/lib/angular.hammer.min.js',
   'Prototipos/Tela_calendario_angular_tabela/index.js',
      'Prototipos/Tela_calendario_angular_tabela/indexSpec2.js'
    ],
        basePath: '../../',
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['Chrome'],
        autoWatch: false,
        singleRun: true,
        colors: true
    });
};