define(['marionette'], function(Marionette) {
    var dashboard = Marionette.Layout.extend({
        template: templates.dashboard,
        regions: {
            searchForm: '#search-form',
            playlists: '#playlists',
            tracksResults: '#tracks-results',
            videoPlayer: '#video-player',
            queueList: '#queue-list',
            playerControls: '#player-controls',
        }
    });
    return new dashboard();
});
