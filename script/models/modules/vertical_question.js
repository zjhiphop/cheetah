// Filename: models/projects/list
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var vq_model = Backbone.Model.extend({
        defaults:{
           selection:[],
           result:[],
           rightAns:[]
        },
        initialize : function() {
            var args=[].slice.call(arguments,0),that=this;
            _.each(args,function(opt){
               that.attributes = $.extend(true,that.attributes,opt);
            });
        },
        validate : function(options) {
            if(!options) {
                throw new Error("You must specify a data!");
            }
        }
    });
    return vq_model;    
});
