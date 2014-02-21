/*jshint expr: true*/
define(['models/track.model'], function(TrackModel){
    describe('Track model', function () {
        it('Get Video Id', function (done) {
            var track = new TrackModel({
                name: 'La camisa negra',
                artist: 'Juanes'
            });
            //try to get model video and check if good data
            track.getVideo().then(function(videoData){
                expect(videoData).to.be.an('object');
                done();
            });
        });
    });
});