/*
* RequireJS settings
*/
require.config({
    paths: {
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore-min',
        jquery: 'bower_components/jquery/dist/jquery.min',
        marionette: 'bower_components/marionette/lib/backbone.marionette.min',
        'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr.min',
        'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter.min'
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
        }
    }
});

//application initializers load
define(['init'], function(App) {
    App.start();
});
