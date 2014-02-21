/*jshint expr: true*/
define(['models/search.model'], function(Search) {
    describe('Search model initialize and search', function() {
        it('returns tracks results', function (done) {
            //var search = new Search();
            Search.search('camisa negra').then(function(data){
                expect(data).to.not.be.empty;
                expect(data.models[0].get('name')).to.not.be.empty;
                done();
            });
        });
    });
});