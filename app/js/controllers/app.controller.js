define(['marionette',
        'vent',
        'backbone',
        'views/dashboard.layout',
        'views/searchform.view',
        'views/track-results.layout',
        'views/tracklist.view',
        'views/track.view',
        'views/video.view',
        'views/playercontrols.view',
        'models/search.model',
        'models/track.model',
        'collections/trackslist.collection',
        'collections/queue.collection'
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
        PlayerControlsView,
        SearchModel,
        TrackModel,
        TracksListCollection,
        QueueCollection
    ) {
        return Marionette.Controller.extend({
            initialize: function(options) {
                var that = this;

                this._showDashboard();

                this.searchLimit = parseInt(($('.main-area').width() / 160) * 2);
                //listen to new search
                vent.on('search:set', function(term) {
                    Backbone.history.navigate('search/' + term, {
                        trigger: true
                    });
                });
                //listen when a track is played
                vent.on('play:video', function(track) {
                    var player = new VideoView({
                        model: track.saveRecent()
                    });
                    that.dashboard.videoPlayer.show(player);
                });

                //when a song is added to queue list
                vent.on('queue:song', function(track) {
                    that.queue.add(track);
                    track.save();
                });

                //play next song on queue list
                vent.on('play:next', function() {
                    that.queue.playNext();
                });

                //remove a song from queue list
                vent.on('unqueue:song', function(track) {
                    that.queue.unqueue(track);
                });

                vent.on('update:player', function(track, player) {
                    var playerControls = new PlayerControlsView({
                        model: track,
                        player: player
                    });
                    that.dashboard.playerControls.show(playerControls);
                });

                this._restoreLastVideo();
                this._showQueue();
            },
            _showDashboard: function() {
                var container = new Marionette.Region({
                    el: "#container"
                });
                this.dashboard = new DashboardLayout();
                container.show(this.dashboard);
            },
            //first page load
            index: function(options) {

            },
            //when a search is peformed
            search: function(term) {
                //ask Search model to search a term
                var that = this;
                new SearchModel().search(term, this.searchLimit).then(function(tracksCollection) {
                    //create a tracklist view, set collection from results
                    var trackList = new TracklistView({
                        collection: tracksCollection,
                    });
                    //show new tracklist
                    that.dashboard.tracksResults.show(trackList);
                });
            },
            _restoreLastVideo: function() {
                //restore last played song from localstorage
                var model = JSON.parse(localStorage.getItem('yuty-current-track'));
                //check if a song in the recent 
                if (model && model.videoData && model.videoData.id) {
                    //create a track model and send it to video player
                    var track = new TrackModel(model);
                    track.getVideo().then(function() {
                        vent.trigger('play:video', track);
                    });
                }
            },
            _showQueue: function() {
                //create a queue collection
                this.queue = new QueueCollection();
                this.queue.fetch();

                //create a tracklist view to use as queue
                var queueView = new TracklistView({
                    collection: this.queue
                });

                //render queue into dashboard
                this.dashboard.queueList.show(queueView);
            }
        });
    });
