// Filename: views/modules/option_box
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/text!tpl/mustache/common/option_box.tpl'
], function($, _, Backbone,$$,template){
  var optionBoxView = Backbone.View.extend({
    tagName:"li",
    template:template,
    events:{
      "click input":"toggleShow"
    },
    render: function(){
      var compiledTemplate = $$.render( template, this.model );
      this.$el.append( compiledTemplate );
      return this;
    },
    toggleShow:function(e){
      this.$(e.currentTarget).parents('label').toggleClass("ets-"+this.model.type+"-b-checked");
    }
  });
  return optionBoxView;
});