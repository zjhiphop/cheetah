// Filename: models/modules/option_box
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var option_box = Backbone.Model.extend({
     defaults:{
       content:"",
       type:"checkbox",
       id:'optbx'+_.uuid()
     },
     initalize:function(option){
       this.set(option);
     },
     validate:function(attrs){
       if(!attrs.type){
         return "You must supply a attribute 'type'";
       }
     }    
  });
  return option_box;
});
