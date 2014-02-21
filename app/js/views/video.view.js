define(['marionette', 'vent'], function(Marionette, vent) {
    return Marionette.ItemView.extend({
        template: templates['video-player'],
        onShow: function() {
            console.log(this.model.get('start'));
            this.player = new YT.Player('embed-player', {
                width: 270,
                height: 220,
                videoId: this.model.get('videoData').id,
                events: {
                    onReady: _.bind(this.onVideoReady, this),
                    onStateChange: this.onVideoStateChange
                },
                playerVars: {
                    start: parseInt(this.model.get('start'))
                }
            });
        },
        onBeforeClose: function(){
            clearInterval(this.timer);
        },
        //on video ready up volume and start playinh
        onVideoReady: function(e) {
            e.target.setVolume(100);
            e.target.playVideo();
            var that = this;
            this.timer = setInterval(function(){
                that.model.set('start', that.player.getCurrentTime());
                that.model.save();
            }, 10000);
        },
        onVideoStateChange: function(e){
            if(e.data === 0){
                vent.trigger('play:next');
            }
        }
    });
});
