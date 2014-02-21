define(['marionette'], function(Marionette){
    return Marionette.AppRouter.extend({
        appRoutes: {
            "": "index",
            "search/:query": "search",
            "search/:query/:video": "search"
        }
    });
});