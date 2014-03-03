define(['marionette',
        'vent',
        'backbone',
        'views/dashboard.layout',
        'views/tracklist.view',
        'views/video.view',
        'views/playercontrols.view',
        'models/search.model',
        'models/track.model',
        'collections/queue.collection'
    ],
    function(
        Marionette,
        vent,
        Backbone,
        DashboardLayout,
        TracklistView,
        VideoView,
        PlayerControlsView,
        SearchModel,
        TrackModel,
        QueueCollection
    ) {
        return Marionette.Controller.extend({
            initialize: function(options) {
                var that = this;

                //stablish search limit based on current window resolution
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

                //when a new video start playing, update playercontrols
                vent.on('update:player', function(track, player) {
                    var playerControls = new PlayerControlsView({
                        model: track,
                        player: player
                    });
                    that.dashboard.playerControls.show(playerControls);
                });

                //show dashboard, restore last video and init queue
                this._showDashboard();
                this._restoreLastVideo();
                this._showQueue();
            },
            //init container and show dashboard layout
            _showDashboard: function() {
                var container = new Marionette.Region({
                    el: "#container"
                });
                this.dashboard = new DashboardLayout();
                container.show(this.dashboard);
            },
            //first page load
            index: function(options) {
                //Need to add some text to queue, video and probably show featured music
                //currently the dasboard is totally empty the first time
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
            //restore last video from localstorage if any
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
            //initilaize the queue and show it in dashboard
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
