//@off
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  //@on
  var appModel = Backbone.Model.extend({
     defaults:{
       activity:{},
       comsrc:{
         
         epaper:{},
         audio:{}
       }
     },
     initalize:function(){
       
     },
     validate:function(){
       
     }    
  });
  return appModel;
});
