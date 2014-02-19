define(['backbone', 'models/track.model'], function(Backbone, Track){
    return Backbone.Collection.extend({
        model: Track
    });
});