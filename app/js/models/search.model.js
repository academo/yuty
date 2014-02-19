//takes a term and search on API
define(['backbone', 'jquery', 'collections/trackslist.collection'], function(Backbone, $, TracksList) {
    return Backbone.Model.extend({
        search: function(term) {
            var deferred = $.Deferred();
            $.when(
                $.ajax('http://ws.audioscrobbler.com/2.0/', {
                    //dataType: 'json',
                    data: {
                        method: 'track.search',
                        track: term,
                        api_key: 'e26925d100f90ade336b398c79aa2e38',
                        format: 'json'
                    }
                }),
                $.ajax('http://ws.audioscrobbler.com/2.0/', {
                    //dataType: 'json',
                    data: {
                        method: 'artist.search',
                        artist: term,
                        api_key: 'e26925d100f90ade336b398c79aa2e38',
                        format: 'json',
                        limit: 10
                    }
                })
            ).then(function(tracks, artists) {
                deferred.resolve(new TracksList(tracks[0].results.trackmatches.track));
            });
            return deferred.promise();
        }
    });
});
