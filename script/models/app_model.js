//@off
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  //@on
  var appModel = Backbone.Model.extend({
     defaults:{
       activity:{},
       comsrc:{},
       sidebar:{}
     },
     initalize:function(){
       
     },
     validate:function(){
       
     }    
  });
  return appModel;
});
