define(['app', 'marionette', 'views/sidebar.layout', 'views/searchform.view'],
    function(App, Marionette, Sidebar, SearchForm) {
        return Marionette.Controller.extend({
            initialize: function(options) {
                
            },
            //gets mapped to in AppRouter's appRoutes
            index: function() {
                var container = new Backbone.Marionette.Region({
                    el: "#container"
                });
                var sidebar = new Sidebar();
                container.show(sidebar);
                sidebar.searchForm.show(new SearchForm());
            }
        });
    });
