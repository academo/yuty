//Initializer for base dashboard layout
define(['app', 'marionette',
        'views/dashboard.layout',
        'views/searchform.view',
        'views/track-results.layout',
    ],
    function(App,
        Marionette,
        DashboardLayout,
        SearchFormView,
        TrackResultsLayout) {
        //add layout initializer
        App.addInitializer(function() {
            var container,
                trackResults;
            //general container
            container = new Marionette.Region({
                el: "#container"
            });
            //show dashboard                
            container.show(DashboardLayout);
            //show search form
            DashboardLayout.searchForm.show(new SearchFormView());
            //show tracks results
            DashboardLayout.tracksResults.show(TrackResultsLayout);
        });
    });