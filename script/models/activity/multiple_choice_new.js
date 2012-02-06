define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var mcn_model = Backbone.Model.extend({
        defaults : {
            act_title : "Read the article and answer questions",
            epaper_content:'<img src="imgs/article.gif" alt="epaper" />',
            act_box_fullwidth: false
        },
        initialize : function(option) {
            this.attributes = _.extend(this.attributes, option);
        },
        validate : function() {
        }
    });
    return mcn_model;
});
