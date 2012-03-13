define(['jquery', 
'underscore',
'backbone'], function($, _, Backbone) {
    "use strict"
    var Model = Backbone.Model.extend({
        defaults: {
            'width': 600,
            'hasOverlay': true,
            'expandable': false,
            'epaper_content': '',
            'audioPlayerBar': {
                show: false,
                src: ''
            }
        },
        initialize : function(options) {
            this.attributes = _.deepExtend(this.attributes, options);
        },
        validate : function(options) {
			// todo
        }
    });

    return new Model();
});
