define(['jquery', 
		'underscore',
	   	'backbone'], function($, _, Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            playProgressIntervals: [],
            progressWidth: 129,
            display: [], //hide, auto, show
            timeOuts: [],
            onPlayCallbackFunction: [],
            times: [],
            isRecording: false,
            duration: {}
        },

        initialize : function(options) {
            this.attributes = _.extend(this.attributes, options);
        }

    });
    return model;
});
