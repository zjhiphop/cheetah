//@off
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  //@on
  var appModel = Backbone.Model.extend({
     defaults:{
       activity:[],
       
     },
     initalize:function(){
       
     },
     validate:function(){
       
     }    
  });
  return appModel;
});
