define(['marionette'], function(Marionette) {
    return Marionette.Layout.extend({
        template: templates['track-results'],
        regions: {
            tracksList: {
                selector: '#tracks-list',
                //regionType: NoWrapRegion
            },
            artistList: '#artists-list'
        }
    });
});
