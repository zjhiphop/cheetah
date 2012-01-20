define([
  'jquery',
  'underscore',
  'backbone'
],function($, _, Backbone){
  var mcn_model=Backbone.Model.extend({
     defaults:{
       act_title:"",
       cunrrent:1,
       total:"",
       question_name:"",
       Prev:"Prev",
       Next:"Next"
     },
     initalize:function(){
       
     },
     validate:function(){
       
     }    
  });
  return new mcn_model();
});
