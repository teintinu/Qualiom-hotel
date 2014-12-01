module.exports = function(config) {
    config.set({
        files: [
            'Qualiom-hotel-test/testKarma.js'
        ],
        basePath: '../',
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['PhantomJS', 'Firefox', 'Opera'],
        autoWatch: false,
        singleRun: true,
        colors: true
    });
};