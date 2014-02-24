define(['backbone', 'models/track.model', 'vent', 'localstorage'], function(Backbone, Track, vent){
    return Backbone.Collection.extend({
        model: Track,
        playNext: function(){
            //check if any song in the list
            if(!this.length){
                return;
            }
            //get first song from list
            var track = this.first();
            //clone it to avoid keep it in localstorage
            var next = track.clone();
            //remove it from localstorage
            track.destroy();
            //get video and trigger play:video event
            next.getVideo().then(function(){
                vent.trigger('play:video', next);
            });
        },
        //takes a track and remove it from localstorage
        unqueue: function(track){
            track.destroy();
        }
    });
});