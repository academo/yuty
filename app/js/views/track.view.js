define(['marionette', 'vent'], function(Marionette, vent){
    return Marionette.ItemView.extend({
        tagName: 'tr',
        template: templates['track-item'],
        ui: {
            playButton: 'button.play'
        },
        events: {
            'click @ui.playButton': 'playSong'
        },
        playSong: function(){
            var that = this;
            this.model.getVideo().then(function(){
                vent.trigger('play:video', that.model);
            });
        }
    });
});