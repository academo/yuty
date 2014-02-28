define(['backbone', 'models/track.model', 'vent', 'localstorage'], function(Backbone, Track, vent){
    return Backbone.Collection.extend({
        model: Track
    });
});