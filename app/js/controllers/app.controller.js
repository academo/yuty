define(['app', 'marionette', 'views/dashboard.layout', 'views/searchform.view'],
    function(App, Marionette, Dashboard, SearchForm) {
        return Marionette.Controller.extend({
            initialize: function(options) {
                
            },
            //gets mapped to in AppRouter's appRoutes
            index: function() {
                var container = new Backbone.Marionette.Region({
                    el: "#container"
                });
                var dashboard = new Dashboard();
                container.show(dashboard);
                dashboard.searchForm.show(new SearchForm());
            }
        });
    });
