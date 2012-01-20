// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/activity/mutiple_choice_new',
  'help/text!tpl/mustache/activity/mutiple_choice_new.tpl'
], function($, _, Backbone,$$, model,tpl){
  var mutiple_choice_new = Backbone.View.extend({
    el: $("#ets-act-multichoice"),
    initialize: function(){
    },
    render: function(data){
      var data=model.toJSON();
      var compiledTemplate = $$.to_html( tpl, data );
      this.el.html( compiledTemplate ); 
    }
  });
  return new mutiple_choice_new;
});
