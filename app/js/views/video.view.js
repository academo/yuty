define(['marionette', 'vent'], function(Marionette, vent) {
    return Marionette.ItemView.extend({
        template: templates['video-player'],
        //on show create player with player id and set start time
        //start time is default 0 for no restoring videos
        ui: {
            nextButton: 'button.next',
            iframe: '#embed-player'
        },
        events: {
            'click @ui.nextButton': 'nextVideo'
        },
        onShow: function() {
            this.player = new YT.Player('embed-player', {
                width: 270,
                height: 240,
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
            e.target.setVolume(0);
            //e.target.playVideo();
            var that = this;
            this.timer = setInterval(function(){
                that.model.set('start', that.player.getCurrentTime());
                that.model.saveRecent();
            }, 10000);
            setTimeout(function(){
                $('#embed-player').css('min-width', $("#video-player").width() + 'px');
            }, 100);
        },
        //when video stops trigger play next from list
        onVideoStateChange: function(e){
            switch(e.data){
                case 0:
                    vent.trigger('play:next');
                    break;
                case 5:
                    
                    break;
            }
        },
        nextVideo: function(){
            vent.trigger('play:next');
        }
    });
});
