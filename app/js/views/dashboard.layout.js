define(['marionette'], function(Marionette) {
    return Marionette.Layout.extend({
        template: templates.dashboard,
        initialize: function(){
        },
        regions: {
            searchForm: '#search-form',
            playlists: '#playlists',
            tracksResults: '#tracks-results',
            videoPlayer: '#video-player',
            queueList: '#queue-list',
            playerControls: '#player-controls',
        }
    });
});
