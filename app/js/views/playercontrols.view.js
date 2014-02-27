//view which manages basic view
define(['marionette', 'models/track.model', 'vent', 'jquery', 'jqueryui'], function(Marionette, TrackModel, vent) {
    return Marionette.ItemView.extend({
        template: templates['player-controls'],
        itemViewContainer: "div",
        model: new TrackModel(),
        ui: {
            play: 'button.pause',
            next: 'button.next',
            progressBar: '.progress-bar',
            volumeBar: '.volume-bar'
        },
        events: {
            'click @ui.play': 'playPauseVideo',
            'click @ui.next': 'nextVideo'
        },
        initialize: function() {
            this.player = this.options.player;
        },
        onClose: function(){
            clearInterval(this.timer);
        },
        onShow: function() {
            this.setTimer();
            this.updateTimer();
            this.updateVolume();


            this.ui.progressBar.slider({
                value: (this.player.getCurrentTime() * 100) / this.seconds,
                orientation: "horizontal",
                range: "min",
                animate: true,
                change: _.bind(this.seekVideo, this)
            });

        },
        seekVideo: function(event, ui){
            if(event.clientX){
                var seconds = parseInt((ui.value * this.seconds) / 100)
                this.player.seekTo(seconds);
            }
        },
        setVolume: function(event, ui){
            this.player.setVolume(ui.value);
        },
        playPauseVideo: function() {
            if (this.ui.play.hasClass('play')) {
                this.player.playVideo();
                this.ui.play.removeClass('play');
            } else {
                this.player.pauseVideo();
                this.ui.play.addClass('play');
            }
        },
        setTimer: function() {
            var that = this;
            //set new interval
            this.timer = setInterval(_.bind(this.updateProgress, this), 1000);
        },
        updateProgress: function() {
            //save player status to restore on reload
            this.model.set('start', this.player.getCurrentTime());
            this.model.saveRecent();

            //calculate video progress and show in progress bar
            var percent = parseInt((this.player.getCurrentTime() * 100) / this.seconds);
            this.ui.progressBar.slider( "option", "value", percent );

            //check player status to show play or pause logo
            //this is necessary because youtube doesn't allow to disable
            //play/pause on clicking video iframe
            if (_.indexOf([-1, 0, 2], this.player.getPlayerState()) !== -1) {
                this.ui.play.addClass('play');
            } else {
                this.ui.play.removeClass('play');
            }
        },
        updateTimer: function() {
            this.seconds = this.player.getDuration();
            var time = [
                Math.floor(this.seconds / 3600),
                Math.floor(this.seconds / 60) % 60,
                Math.floor(this.seconds) % 60
            ]
            this.model.set('time', _.compact(time).join(':'));
        },
        updateVolume: function() {
            //this.ui.volumeBar.width(this.player.getVolume() + '%');
             this.ui.volumeBar.slider({
                value: this.player.getVolume(),
                orientation: "horizontal",
                range: "min",
                animate: true,
                change: _.bind(this.setVolume, this),
                slide: _.bind(this.setVolume, this)
            });
        },
        nextVideo: function() {
            vent.trigger('play:next');
        }
    });
});
