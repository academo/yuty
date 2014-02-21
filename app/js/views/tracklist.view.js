//view which manages basic view
define(['marionette'], function(Marionette) {
    return Marionette.ItemView.extend({
        template: templates['track-list'],
        //search form and input for basic search
        ui: {
        },
        //on form submit
        events: {

        },
        //search event to handle form submit
        search: function(e){
            e.preventDefault();
            //send simpleSearchSubmit event to App.
            vent.trigger('search:set', this.ui.input.val());
        }
    });
});
