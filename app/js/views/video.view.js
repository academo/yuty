define(['marionette', 'vent'], function(Marionette, vent) {
    return Marionette.ItemView.extend({
        template: templates['video-player'],
        //on show create player with player id and set start time
        //start time is default 0 for no restoring videos
        ui: {
            nextButton: 'button.next'
        },
        events: {
            'click @ui.nextButton': 'nextVideo'
        },
        onShow: function() {
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
        //before close the view, stop video loading and clear timer
        onBeforeClose: function(){
            this.player.stopVideo();
            clearInterval(this.timer);
        },
        //on video ready up volume and start playinh
        onVideoReady: function(e) {
            e.target.setVolume(100);
            //e.target.playVideo();
            var that = this;
            this.timer = setInterval(function(){
                that.model.set('start', that.player.getCurrentTime());
                that.model.saveRecent();
            }, 10000);
        },
        //when video stops trigger play next from list
        onVideoStateChange: function(e){
            if(e.data === 0){
                vent.trigger('play:next');
            }
        },
        nextVideo: function(){
            vent.trigger('play:next');
        }
    });
});
