var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if(file.indexOf('Spec') !== -1){
        tests.push(file);
    }
  }
}


require.config({
    baseUrl: '/base/app/js',
    paths: {
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore-min',
        jquery: 'bower_components/jquery/dist/jquery.min',
        marionette: 'bower_components/marionette/lib/backbone.marionette.min',
        'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr.min',
        'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter.min',
        localstorage: 'bower_components/backbone.localstorage/backbone.localStorage-min'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        localstorage: {
            deps: ['backbone']
        }
    },
    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});