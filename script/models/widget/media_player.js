define(['jquery', 
'underscore',
'backbone'], function($, _, Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
        	hasBar: true,
            src: ''
        },

        initialize : function(options) {
            this.attributes = _.deepExtend(this.attributes, options);
        }

    });
    return model;
});
