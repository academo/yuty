define(['marionette'], function(Marionette) {
    var trackResults = Marionette.Layout.extend({
        template: templates['track-results'],
        regions: {
            tracksList: {
                selector: '#tracks-list',
                //regionType: NoWrapRegion
            },
            artistList: '#artists-list'
        }
    });
    return new trackResults();
});
