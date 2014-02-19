//view which manages basic view
define(['marionette', 'vent'], function(Marionette, vent) {
    return Marionette.ItemView.extend({
        template: templates['search-form'],
        //search form and input for basic search
        ui: {
            form: 'form.search-form',
            input: 'input[type=text]'
        },
        //on form submit
        events: {
            'submit @ui.form' : 'search'
        },
        //search event to handle form submit
        search: function(e){
            e.preventDefault();
            //send simpleSearchSubmit event to App.
            vent.trigger('search:set', this.ui.input.val());
        }
    });
});
