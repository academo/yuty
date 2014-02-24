define(['collections/trackslist.collection', 'models/track.model', 'vent'], 
    function(TracksCollection, TrackModel, vent) {
    describe('Queue collection', function() {
        var models;
        beforeEach(function() {
            localStorage.clear();
            vent.off("play:video");
            
            models = [
                new TrackModel({
                    name: 'song1',
                    artist: 'artist'
                }),
                new TrackModel({
                    name: 'song2',
                    artist: 'artist'
                }),
                new TrackModel({
                    name: 'song3',
                    artist: 'artist'
                })
            ];
        });
        it('Returns next song atnd remove it from queue', function(done) {
            var queue,
                song = 1;

            queue = new TracksCollection(models);

            vent.on('play:video', function(model){
                expect(model.get('name')).to.be.equal('song' + song);
                if(song <= 2){
                    song++;
                    queue.playNext();
                }else{
                    done();
                }
            });
            //initialize collection
            queue.playNext();
        });
        it('Removes song from queue', function (done) {
            var queue = new TracksCollection(models);
            queue.unqueue(models[0]);
            vent.on('play:video', function(model){
                expect(model.get('name')).to.be.equal('song2');
                done();
            });
            //initialize collection
            queue.playNext();
        });
    });
});
