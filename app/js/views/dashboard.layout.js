define(['marionette', 'views/searchform.view'], function(Marionette, SearchFormView) {
    return Marionette.Layout.extend({
        template: templates.dashboard,
        onRender: function(){
            this.searchForm.show(new SearchFormView());
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
