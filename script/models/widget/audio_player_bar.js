define(['jquery', 
'underscore',
'backbone'], function($, _, Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            src: ''
        },

        initialize : function(options) {
            this.attributes = _.extend(this.attributes, options);
        }

    });
    return model;
});
