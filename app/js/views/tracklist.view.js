//view which manages basic view
define(['marionette', 'views/track.view'], function(Marionette) {
    return Marionette.CompositeView.extend({
        template: templates['track-list'],
        itemViewContainer: "ul",
        onShow: function(){
            var height = $(window).height() - $('header.main').height() - 5;
            $(".sidebar, .video-sidebar, .main-area").css({
                'height':  height,
                'max-height': height
            });
        }
    });
});