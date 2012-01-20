// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/text!tpl/mustache/common/vertical_question.tpl'
], function($, _, Backbone,$$, vq_tpl){
  var Vertical_Question_View = Backbone.View.extend({
    el: $("#ets-act-mc-form-options"),
    initialize: function(){
    },
    render: function(data){
      var compiledTemplate = $$.render( vq_tpl, data );
      this.el.html( compiledTemplate ); 
    }
  });
  return new Vertical_Question_View;
});
