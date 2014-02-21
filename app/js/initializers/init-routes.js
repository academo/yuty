//Initializer script for routes
define(['backbone', 'app', 'routers/app.router', 'controllers/app.controller'], 
    function(Backbone, App, AppRouter, AppController) {
    //add routes
    App.addInitializer(function(){
        new AppRouter({
            controller: new AppController()
        });
    });
    return App;
});