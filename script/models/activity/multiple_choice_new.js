define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var mcn_model = Backbone.Model.extend({
        defaults : {
            act_title : "Read the article and answer questions",
            vq_container:"#ets-act-mc-form"
        },
        initialize : function(option) {
            this.attributes = _.extend(this.defaults, option);
        },
        validate : function() {
        }
    });
    return mcn_model;
});
