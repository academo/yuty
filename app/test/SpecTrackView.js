/*jshint expr: true*/
define(['views/track.view', 'models/track.model', 'vent'], 
    function(TrackView, TrackModel, vent) {
    describe('Track View', function() {
        var region,
            model;
        before(function() {
            $('<div id="test" />').appendTo('body');
        });
        beforeEach(function() {
            region = new Backbone.Marionette.Region({
                el: "#test"
            });
            model = new TrackModel({
                name: 'La Camisa Negra',
                artist: 'Juanes'
            });
        });
        it('asks for video id', function (done) {
            var view = new TrackView({
                model: model
            });
            vent.on('play:song', function(videoData){
                expect(videoData).to.be.an('object');
                done();
            });
            view.playSong();
        });
    });
});