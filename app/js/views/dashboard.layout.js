define(['marionette'], function(Marionette) {
    return Marionette.Layout.extend({
        template: templates.dashboard,
        regions: {
            searchForm: '#search-form',
            playlists: '#playlists',
            tracksList: '#tracks-list',
            artistList: '#artists-list'
        }
    });
});
