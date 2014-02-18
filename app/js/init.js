//Initializer script for routes
define(['marionette', 'backbone', 'app', 'routers/app.router', 'controllers/app.controller'], 
    function(Marionette, Backbone, App, AppRouter, AppController) {
    //add routes
    App.addInitializer(function(){
        new AppRouter({
            controller: new AppController()
        });
    });
    App.on('initialize:after', function(){
        Backbone.history.start();
    });
    return App;
});