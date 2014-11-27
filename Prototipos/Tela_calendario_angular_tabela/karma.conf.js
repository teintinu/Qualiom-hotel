module.exports = function(config) {
  config.set({
    basePath : '',
    files : [
      '../../bower_components/angular/angular.js',
      '../../node_modukes/src/ngMidwayTester/src/ngMidwayTester.js',
      '../../node_modukes/src/ngMidwayTester/test/lib/chai.js',
      'indexSpec.js'
    ],
    singleRun: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    proxies: {
      '/web': 'http://localhost:9000'
    }
  });
};
