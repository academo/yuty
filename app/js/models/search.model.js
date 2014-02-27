//takes a term and search on API
define(['backbone', 'jquery', 'collections/trackslist.collection'], function(Backbone, $, TracksList) {
    var searchModel = Backbone.Model.extend({
        defaults: {
            limit: 11
        },
        search: function(term, limit) {
            var queryLimit = limit || this.get('limit');
            var deferred = $.Deferred();
            $.ajax('http://ws.audioscrobbler.com/2.0/', {
                //dataType: 'json',
                data: {
                    method: 'track.search',
                    track: term,
                    api_key: 'e26925d100f90ade336b398c79aa2e38',
                    format: 'json',
                    limit: queryLimit
                }
            }).then(function(tracks) {
                deferred.resolve(new TracksList(tracks.results.trackmatches.track));
            });
            return deferred.promise();
        }
    });
    return new searchModel();
});
