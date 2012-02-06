define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var mcn_model = Backbone.Model.extend({
        defaults : {
            act_title : "Read the article and answer questions",
<<<<<<< HEAD
            epaper_content:'<img src="imgs/article.gif" alt="epaper" />'
=======
            act_box_fullwidth: false
>>>>>>> 3d65341fe5c0c844eb0ddfdeea38dcd528750413
        },
        initialize : function(option) {
            this.attributes = _.extend(this.attributes, option);
        },
        validate : function() {
        }
    });
    return mcn_model;
});
