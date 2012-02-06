define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var mcn_model = Backbone.Model.extend({
        defaults : {
            act_title : "Read the article and answer questions",
            epaper_content:'<img src="imgs/_temp/article.gif" alt="" style="margin: 15px 0px 15px 25px;" />'
        },
        initialize : function(option) {
            this.attributes = _.extend(this.attributes, option);
        },
        validate : function() {
        }
    });
    return mcn_model;
});
