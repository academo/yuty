define(['marionette'], function(Marionette) {
    return Marionette.Region.extend({
        open: function(view) {
            view.$el.children().clone(true).appendTo(this.$el);
        }
    });
});
