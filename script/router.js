// Filename: router.js
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'views/activity/mutiple_choice_new'
], function($, _, Backbone, mutichoice){
//@on
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'mutichoice': 'showMutiChoice',
      // Default
      '*actions': 'defaultAction'
    },
    showMutiChoice:function(){
      mutichoice.render();
    },
    defaultAction: function(actions){
      // We have no matching route, lets just log what the URL was
     $("#ets-activity").append("Not implement!");
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});