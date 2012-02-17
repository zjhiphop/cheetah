define(['jquery', 
		  'underscore',
	   	'backbone'], function($, _, Backbone) {
    var model = Backbone.Model.extend({
        initialize : function(options) {
            this.attributes = _.deepExtend(this.attributes, options);
        },
        validate : function(options) {
			// todo
        }
    });
    return new model({
        'width': 600,
        'hasOverlay': true,
        'expandable': false,
        'epaper_content': ''
    });
});
