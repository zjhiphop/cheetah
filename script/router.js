// Filename: router.js
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'js/activityRouters'
], function($, _, Backbone,actRouter){
//@on
  var AppRouter = Backbone.Router.extend(_.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
      // We have no matching route, lets just log what the URL was
     $("#ets-activity").append("Not implement!");
    }
  },actRouter));
  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});