define(['marionette', 
        'vent',
        'backbone',
        'views/dashboard.layout', 
        'views/searchform.view', 
        'views/track-results.layout',
        'views/tracklist.view',
        'views/track.view',
        'views/video.view',
        'models/search.model',
        'models/track.model'
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
        SearchModel,
        TrackModel
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
                        model: track.save()
                    });
                    DashboardLayout.videoPlayer.show(player);
                });

                this.restoreLastVideo();
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
            },
            restoreLastVideo: function(){
                //restore last played song from localstorage
                var model = JSON.parse(localStorage.getItem('yuty-current-track'));
                if(model.videoData.id){
                    var track = new TrackModel(model);
                    track.getVideo().then(function(){
                        vent.trigger('play:video', track);
                    });
                }
            }
        });
    });
