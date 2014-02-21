//view which manages basic view
define(['marionette', 'views/track.view'], function(Marionette) {
    return Marionette.CompositeView.extend({
        template: templates['track-list'],
        itemViewContainer: "tbody"
    });
});