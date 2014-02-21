define(['marionette', 
        'vent',
        'backbone',
        'views/dashboard.layout', 
        'views/searchform.view', 
        'views/track-results.layout',
        'views/tracklist.view',
        'views/track.view',
        'views/video.view',
        'models/search.model'
        ],
    function(
        Marionette, 
        vent,
        Backbone, 
        DashboardLayout, 
        SearchFormView, 
        TrackResultsLayout,
        TracklistView,
        TrackView,
        VideoView,
        SearchModel
        ) {
        return Marionette.Controller.extend({
            initialize: function(options) {
                
                //listen to new search
                vent.on('search:set', function(term){
                    Backbone.history.navigate('search/' + term, {trigger: true});
                });
                //listen when a track is played
                vent.on('play:video', function(track){
                    var player = new VideoView({
                        model: track
                    });
                    DashboardLayout.videoPlayer.show(player);
                });
            },
            //first page load
            index: function(options){

            },
            //when a search is peformed
            search: function(term){
                SearchModel.search(term).then(function(tracksCollection){
                    var trackList = new TracklistView({
                        collection: tracksCollection,
                        itemView: TrackView
                    });
                    TrackResultsLayout.tracksList.show(trackList);
                });
            }
        });
    });
