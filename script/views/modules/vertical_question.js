// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'help/text!tpl/mustache/common/vertical_question.tpl'
], function($, _, Backbone, vertical_question){
  var Vertical_Question_View = Backbone.View.extend({
    el: $("#page"),
    initialize: function(){
    },
    render: function(){
      var data = {};
      var compiledTemplate = _.template( userListTemplate, data );
      this.el.html( compiledTemplate ); 
    }
  });
  return new userListView;
});
