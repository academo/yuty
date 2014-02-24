/*jshint expr: true*/
define(['models/track.model'], function(TrackModel){
    describe('Track model', function () {
        beforeEach(function () {
            localStorage.clear();
        });
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
        it('Saves on localstorage', function(){
            var track = new TrackModel({
                name: 'La camisa negra',
                artist: 'Juanes'
            });
            track.saveRecent();
            var model = JSON.parse(localStorage.getItem('yuty-current-track'));
            expect(model).to.be.an('object');
            expect(model.name).to.not.be.empty;
        });
        it('Generates guid', function(){
            var track = new TrackModel({
                name: 'La camisa negra',
                artist: 'Juanes'
            });
            expect(track.get('guid')).to.not.be.empty;
        });
    });
});