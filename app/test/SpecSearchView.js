/*jshint expr: true*/
define(['views/searchform.view', 'vent'], function(SearchformView, vent){
    describe('Search Form', function () {
        var region,
            model,
            div;
        div = $('<div id="test" />').appendTo('body');
        beforeEach(function() {
            div.empty();
            region = new Backbone.Marionette.Region({
                el: '#test'
            });
        });
        it('should not allow empty search', function (done) {
            var view = new SearchformView();
            region.show(view);
            expect(view.search($.Event( "click" ))).to.be.false;
            done();
        });
        it('should trigger a search if term', function(done){
            var view = new SearchformView();
            region.show(view);
            vent.on('search:set', function(term){
                expect(term).to.equal('camisa');
                done();
            });
            div.find('input[type=text]').val('camisa');
            expect(view.search($.Event( "click" ))).to.not.be.false;
        });
    });
});
