define(['marionette', 'vent'], function(Marionette, vent) {
    return Marionette.ItemView.extend({
        template: templates['video-player'],
        //on show create player with player id and set start time
        //start time is default 0 for no restoring videos
        ui: {
            iframe: '#embed-player'
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
                    start: parseInt(this.model.get('start')),
                    controls: 0
                }
            });
        },
        //before close the view, stop video loading and clear timer
        onBeforeClose: function(){
            this.player.stopVideo();
        },
        //on video ready up volume and start playinh
        onVideoReady: function(e) {
            e.target.setVolume(0);
            e.target.playVideo();
            $('#embed-player').css('min-width', $("#video-player").width() + 'px');

            //trigger evento to aware the video has changed
            vent.trigger('update:player', this.model, this.player);
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
        }
    });
});
