//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'models/projects'
], function($, _, Backbone, projectsModel){
  //@on
  var projectsCollection = Backbone.Collection.extend({
    model: projectsModel,
    initialize: function(){

    }
  });
 
  return new projectsCollection;
});
