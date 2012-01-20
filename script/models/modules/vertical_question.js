// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var vq_model= Backbone.Model.extend({
    initialize:function(options){
      this.items=options.items;
    },
    validate:function(options){
      if(!options){
        throw new Error("You must specify a data!");
      }else if(!options.items){
        throw new Error("Data must have a 'items' node!");
      }
    }
  });
  return new vq_model;
});
