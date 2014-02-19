define(['marionette'], function(Marionette) {
    return Marionette.Layout.extend({
        template: templates.sidebar,
        regions: {
            searchForm: '#search-form',
            playlists: '#playlists'
        }
    });
});
