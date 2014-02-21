define(['marionette', 'vent'], function(Marionette, vent){
    return Marionette.ItemView.extend({
        template: templates['track-item'],
        ui: {
            playButton: 'button.play'
        },
        events: {
            'click @ui.playButton': 'playSong'
        },
        playSong: function(){
            this.model.getVideo().then(function(videoData){
                vent.trigger('play:song', videoData);
            });
        }
    });
});