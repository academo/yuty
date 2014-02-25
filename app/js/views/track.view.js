define(['marionette', 'vent'], function(Marionette, vent){
    return Marionette.ItemView.extend({
        tagName: 'li',
        template: templates['track-item'],
        ui: {
            playButton: 'button.play',
            queueButton: 'button.queue',
            unqueueButton: 'button.unqueue',
            track: 'div.track',
            img: 'img'
        },
        events: {
            'click @ui.playButton': 'playSong',
            'click @ui.track': 'playSong',
            'click @ui.img': 'playSong',
            'click @ui.queueButton': 'queueSong',
            'click @ui.unqueueButton': 'unqueueSong'
        },
        playSong: function(){
            var that = this;
            this.model.getVideo().then(function(){
                vent.trigger('play:video', that.model);
            });
        },
        queueSong: function(){
            vent.trigger('queue:song', this.model.clone());
        },
        unqueueSong: function(){
            vent.trigger('unqueue:song', this.model);
        }
    });
});